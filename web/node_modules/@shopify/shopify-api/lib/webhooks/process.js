"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.process = void 0;
const tslib_1 = require("tslib");
const network_1 = require("@shopify/network");
const http_1 = require("../../runtime/http");
const crypto_1 = require("../../runtime/crypto");
const types_1 = require("../../runtime/crypto/types");
const types_2 = require("../types");
const safe_compare_1 = require("../auth/oauth/safe-compare");
const ShopifyErrors = tslib_1.__importStar(require("../error"));
const logger_1 = require("../logger");
const types_3 = require("./types");
const registry_1 = require("./registry");
function process(config, webhookRegistry) {
    return function process(_a) {
        var { rawBody } = _a, adapterArgs = tslib_1.__rest(_a, ["rawBody"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const request = yield (0, http_1.abstractConvertRequest)(adapterArgs);
            const response = {
                statusCode: network_1.StatusCode.Ok,
                statusText: statusTextLookup[network_1.StatusCode.Ok],
                headers: {},
            };
            const webhookCheck = checkWebhookRequest(rawBody, request.headers);
            const { webhookOk, apiVersion, domain, hmac, topic, webhookId } = webhookCheck;
            let { errorMessage } = webhookCheck;
            const loggingContext = { apiVersion, domain, topic, webhookId };
            const log = (0, logger_1.logger)(config);
            log.info('Processing webhook request', loggingContext);
            if (webhookOk) {
                log.debug('Webhook request is well formed', loggingContext);
                if (yield validateOkWebhook(config.apiSecretKey, rawBody, hmac)) {
                    log.debug('Webhook request is valid', loggingContext);
                    const graphqlTopic = (0, registry_1.topicForStorage)(topic);
                    const handlers = webhookRegistry[graphqlTopic] || [];
                    let found = false;
                    for (const handler of handlers) {
                        if (handler.deliveryMethod !== types_3.DeliveryMethod.Http) {
                            continue;
                        }
                        found = true;
                        log.debug('Found HTTP handler, triggering it', loggingContext);
                        try {
                            yield handler.callback(graphqlTopic, domain, rawBody, webhookId, apiVersion);
                            response.statusCode = network_1.StatusCode.Ok;
                        }
                        catch (error) {
                            response.statusCode = network_1.StatusCode.InternalServerError;
                            errorMessage = error.message;
                        }
                    }
                    if (!found) {
                        log.debug('No HTTP handlers found', loggingContext);
                        response.statusCode = network_1.StatusCode.NotFound;
                        errorMessage = `No HTTP webhooks registered for topic ${graphqlTopic}`;
                    }
                }
                else {
                    log.debug('Webhook validation failed', loggingContext);
                    response.statusCode = network_1.StatusCode.Unauthorized;
                    errorMessage = `Could not validate request for topic ${topic}`;
                }
            }
            else {
                log.debug('Webhook request is malformed', loggingContext);
                response.statusCode = network_1.StatusCode.BadRequest;
            }
            response.statusText = statusTextLookup[response.statusCode];
            const returnResponse = yield (0, http_1.abstractConvertResponse)(response, adapterArgs);
            if (!(0, http_1.isOK)(response)) {
                throw new ShopifyErrors.InvalidWebhookError({
                    message: errorMessage,
                    response: returnResponse,
                });
            }
            return Promise.resolve(returnResponse);
        });
    };
}
exports.process = process;
const statusTextLookup = {
    [network_1.StatusCode.Ok]: 'OK',
    [network_1.StatusCode.BadRequest]: 'Bad Request',
    [network_1.StatusCode.Unauthorized]: 'Unauthorized',
    [network_1.StatusCode.NotFound]: 'Not Found',
    [network_1.StatusCode.InternalServerError]: 'Internal Server Error',
};
const headerProperties = [
    {
        property: 'apiVersion',
        headerName: types_2.ShopifyHeader.ApiVersion,
    },
    {
        property: 'domain',
        headerName: types_2.ShopifyHeader.Domain,
    },
    {
        property: 'hmac',
        headerName: types_2.ShopifyHeader.Hmac,
    },
    {
        property: 'topic',
        headerName: types_2.ShopifyHeader.Topic,
    },
    {
        property: 'webhookId',
        headerName: types_2.ShopifyHeader.WebhookId,
    },
];
function checkWebhookRequest(rawBody, headers) {
    let retVal = {
        webhookOk: true,
        errorMessage: '',
        apiVersion: '',
        domain: '',
        hmac: '',
        topic: '',
        webhookId: '',
    };
    if (rawBody.length) {
        const missingHeaders = [];
        const headerValues = {};
        headerProperties.forEach(({ property, headerName }) => {
            const headerValue = (0, http_1.getHeader)(headers, headerName);
            if (headerValue) {
                headerValues[property] = headerValue;
            }
            else {
                missingHeaders.push(headerName);
            }
        });
        if (missingHeaders.length) {
            retVal.webhookOk = false;
            retVal.errorMessage = `Missing one or more of the required HTTP headers to process webhooks: [${missingHeaders.join(', ')}]`;
        }
        else {
            retVal = Object.assign(Object.assign({}, retVal), headerValues);
        }
    }
    else {
        retVal.webhookOk = false;
        retVal.errorMessage = 'No body was received when processing webhook';
    }
    return retVal;
}
function validateOkWebhook(secret, rawBody, hmac) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const generatedHash = yield (0, crypto_1.createSHA256HMAC)(secret, rawBody, types_1.HashFormat.Base64);
        return (0, safe_compare_1.safeCompare)(generatedHash, hmac);
    });
}
//# sourceMappingURL=process.js.map