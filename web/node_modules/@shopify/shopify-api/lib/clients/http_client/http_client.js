"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientClass = exports.HttpClient = void 0;
const tslib_1 = require("tslib");
const network_1 = require("@shopify/network");
const ShopifyErrors = tslib_1.__importStar(require("../../error"));
const types_1 = require("../../types");
const version_1 = require("../../version");
const processed_query_1 = tslib_1.__importDefault(require("../../utils/processed-query"));
const crypto_1 = require("../../../runtime/crypto");
const types_2 = require("../../../runtime/crypto/types");
const http_1 = require("../../../runtime/http");
const platform_1 = require("../../../runtime/platform");
const logger_1 = require("../../logger");
const types_3 = require("./types");
class HttpClient {
    constructor(params) {
        this.loggedDeprecations = {};
        this.domain = params.domain;
    }
    /**
     * Performs a GET request on the given path.
     */
    get(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.request(Object.assign({ method: network_1.Method.Get }, params));
        });
    }
    /**
     * Performs a POST request on the given path.
     */
    post(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.request(Object.assign({ method: network_1.Method.Post }, params));
        });
    }
    /**
     * Performs a PUT request on the given path.
     */
    put(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.request(Object.assign({ method: network_1.Method.Put }, params));
        });
    }
    /**
     * Performs a DELETE request on the given path.
     */
    delete(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.request(Object.assign({ method: network_1.Method.Delete }, params));
        });
    }
    request(params) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const maxTries = params.tries ? params.tries : 1;
            if (maxTries <= 0) {
                throw new ShopifyErrors.HttpRequestError(`Number of tries must be >= 0, got ${maxTries}`);
            }
            let userAgent = `${types_1.LIBRARY_NAME} v${version_1.SHOPIFY_API_LIBRARY_VERSION} | ${(0, platform_1.abstractRuntimeString)()}`;
            if (this.httpClass().config.userAgentPrefix) {
                userAgent = `${this.httpClass().config.userAgentPrefix} | ${userAgent}`;
            }
            if (params.extraHeaders) {
                if (params.extraHeaders['user-agent']) {
                    userAgent = `${params.extraHeaders['user-agent']} | ${userAgent}`;
                    delete params.extraHeaders['user-agent'];
                }
                else if (params.extraHeaders['User-Agent']) {
                    userAgent = `${params.extraHeaders['User-Agent']} | ${userAgent}`;
                }
            }
            let headers = Object.assign(Object.assign({}, params.extraHeaders), { 'User-Agent': userAgent });
            let body;
            if (params.method === network_1.Method.Post || params.method === network_1.Method.Put) {
                const type = (_a = params.type) !== null && _a !== void 0 ? _a : types_3.DataType.JSON;
                const data = params.data;
                if (data) {
                    switch (type) {
                        case types_3.DataType.JSON:
                            body = typeof data === 'string' ? data : JSON.stringify(data);
                            break;
                        case types_3.DataType.URLEncoded:
                            body =
                                typeof data === 'string'
                                    ? data
                                    : new URLSearchParams(data).toString();
                            break;
                        case types_3.DataType.GraphQL:
                            body = data;
                            break;
                    }
                    headers = Object.assign(Object.assign({}, headers), { 'Content-Type': type, 'Content-Length': new TextEncoder().encode(body).length });
                }
            }
            const url = `${this.httpClass().scheme}://${this.domain}${this.getRequestPath(params.path)}${processed_query_1.default.stringify(params.query)}`;
            const request = {
                method: params.method,
                url,
                headers: (0, http_1.canonicalizeHeaders)(headers),
                body,
            };
            if (this.httpClass().config.logger.httpRequests) {
                const message = [
                    'Making HTTP request',
                    `${request.method} ${request.url}`,
                    `Headers: ${JSON.stringify(headers)}`,
                ];
                if (body) {
                    message.push(`Body: ${JSON.stringify(body).replace(/\n/g, '\\n  ')}`);
                }
                (0, logger_1.logger)(this.httpClass().config).debug(message.join('  -  '));
            }
            function sleep(waitTime) {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    return new Promise((resolve) => setTimeout(resolve, waitTime));
                });
            }
            let tries = 0;
            while (tries < maxTries) {
                try {
                    return yield this.doRequest(request);
                }
                catch (error) {
                    tries++;
                    if (error instanceof ShopifyErrors.HttpRetriableError) {
                        // We're not out of tries yet, use them
                        if (tries < maxTries) {
                            let waitTime = this.httpClass().RETRY_WAIT_TIME;
                            if (error instanceof ShopifyErrors.HttpThrottlingError &&
                                error.response.retryAfter) {
                                waitTime = error.response.retryAfter * 1000;
                            }
                            yield sleep(waitTime);
                            continue;
                        }
                        // We're set to multiple tries but ran out
                        if (maxTries > 1) {
                            throw new ShopifyErrors.HttpMaxRetriesError(`Exceeded maximum retry count of ${maxTries}. Last message: ${error.message}`);
                        }
                    }
                    // We're not retrying or the error is not retriable, rethrow
                    throw error;
                }
            }
            // We're never supposed to come this far, this is here only for the benefit of Typescript
            /* istanbul ignore next */
            throw new ShopifyErrors.ShopifyError(`Unexpected flow, reached maximum HTTP tries but did not throw an error`);
        });
    }
    getRequestPath(path) {
        return `/${path.replace(/^\//, '')}`;
    }
    httpClass() {
        return this.constructor;
    }
    throwFailedRequest(body, response) {
        const errorMessages = [];
        if (body.errors) {
            errorMessages.push(JSON.stringify(body.errors, null, 2));
        }
        const xRequestId = (0, http_1.getHeader)(response.headers, 'x-request-id');
        if (xRequestId) {
            errorMessages.push(`If you report this error, please include this id: ${xRequestId}`);
        }
        const errorMessage = errorMessages.length
            ? `:\n${errorMessages.join('\n')}`
            : '';
        const headers = response.headers ? response.headers : {};
        const code = response.statusCode;
        const statusText = response.statusText;
        switch (true) {
            case response.statusCode === network_1.StatusCode.TooManyRequests: {
                const retryAfter = (0, http_1.getHeader)(response.headers, 'Retry-After');
                throw new ShopifyErrors.HttpThrottlingError({
                    message: `Shopify is throttling requests${errorMessage}`,
                    code,
                    statusText,
                    body,
                    headers,
                    retryAfter: retryAfter ? parseFloat(retryAfter) : undefined,
                });
            }
            case response.statusCode >= network_1.StatusCode.InternalServerError:
                throw new ShopifyErrors.HttpInternalError({
                    message: `Shopify internal error${errorMessage}`,
                    code,
                    statusText,
                    body,
                    headers,
                });
            default:
                throw new ShopifyErrors.HttpResponseError({
                    message: `Received an error response (${response.statusCode} ${response.statusText}) from Shopify${errorMessage}`,
                    code,
                    statusText,
                    body,
                    headers,
                });
        }
    }
    doRequest(request) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const log = (0, logger_1.logger)(this.httpClass().config);
            const response = yield (0, http_1.abstractFetch)(request);
            if (this.httpClass().config.logger.httpRequests) {
                log.debug(`Completed HTTP request, received ${response.statusCode} ${response.statusText}`);
            }
            let body = {};
            if (response.body) {
                try {
                    body = JSON.parse(response.body);
                }
                catch (error) {
                    body = response.body;
                }
            }
            if (!(0, http_1.isOK)(response)) {
                this.throwFailedRequest(body, response);
            }
            const deprecationReason = (0, http_1.getHeader)(response.headers, 'X-Shopify-API-Deprecated-Reason');
            if (deprecationReason) {
                const deprecation = {
                    message: deprecationReason,
                    path: request.url,
                };
                if (request.body) {
                    // This can only be a string, since we're always converting the body before calling this method
                    deprecation.body = `${request.body.substring(0, 100)}...`;
                }
                const depHash = yield (0, crypto_1.createSHA256HMAC)(this.httpClass().config.apiSecretKey, JSON.stringify(deprecation), types_2.HashFormat.Hex);
                if (!Object.keys(this.loggedDeprecations).includes(depHash) ||
                    Date.now() - this.loggedDeprecations[depHash] >=
                        HttpClient.DEPRECATION_ALERT_DELAY) {
                    this.loggedDeprecations[depHash] = Date.now();
                    const stack = new Error().stack;
                    const message = `API Deprecation Notice ${new Date().toLocaleString()} : ${JSON.stringify(deprecation)}  -  Stack Trace: ${stack}`;
                    yield log.warning(message);
                }
            }
            return {
                body: body,
                headers: (_a = response.headers) !== null && _a !== void 0 ? _a : {},
            };
        });
    }
}
exports.HttpClient = HttpClient;
// 1 second
HttpClient.RETRY_WAIT_TIME = 1000;
// 5 minutes
HttpClient.DEPRECATION_ALERT_DELAY = 300000;
function httpClientClass(config, scheme = 'https') {
    class NewHttpClient extends HttpClient {
    }
    NewHttpClient.config = config;
    NewHttpClient.scheme = scheme;
    Reflect.defineProperty(NewHttpClient, 'name', {
        value: 'HttpClient',
    });
    return NewHttpClient;
}
exports.httpClientClass = httpClientClass;
//# sourceMappingURL=http_client.js.map