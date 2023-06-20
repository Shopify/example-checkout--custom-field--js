"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restClientClass = exports.RestClient = void 0;
const tslib_1 = require("tslib");
const http_1 = require("../../../runtime/http");
const types_1 = require("../../types");
const ShopifyErrors = tslib_1.__importStar(require("../../error"));
const http_client_1 = require("../http_client/http_client");
const logger_1 = require("../../logger");
class RestClient extends http_client_1.HttpClient {
    constructor(params) {
        super({ domain: params.session.shop });
        const config = this.restClass().config;
        if (!config.isCustomStoreApp && !params.session.accessToken) {
            throw new ShopifyErrors.MissingRequiredArgument('Missing access token when creating REST client');
        }
        if (params.apiVersion) {
            const message = params.apiVersion === config.apiVersion
                ? `REST client has a redundant API version override to the default ${params.apiVersion}`
                : `REST client overriding default API version ${config.apiVersion} with ${params.apiVersion}`;
            (0, logger_1.logger)(config).debug(message);
        }
        this.session = params.session;
        this.apiVersion = params.apiVersion;
    }
    request(params) {
        const _super = Object.create(null, {
            request: { get: () => super.request }
        });
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            params.extraHeaders = Object.assign({ [types_1.ShopifyHeader.AccessToken]: this.restClass().config.isCustomStoreApp
                    ? this.restClass().config.apiSecretKey
                    : this.session.accessToken }, params.extraHeaders);
            const ret = yield _super.request.call(this, params);
            const link = (0, http_1.getHeader)(ret.headers, 'link');
            if (link !== undefined) {
                const pageInfo = {
                    limit: ((_a = params.query) === null || _a === void 0 ? void 0 : _a.limit)
                        ? (_b = params.query) === null || _b === void 0 ? void 0 : _b.limit.toString()
                        : RestClient.DEFAULT_LIMIT,
                };
                if (link) {
                    const links = link.split(', ');
                    for (const link of links) {
                        const parsedLink = link.match(RestClient.LINK_HEADER_REGEXP);
                        if (!parsedLink) {
                            continue;
                        }
                        const linkRel = parsedLink[2];
                        const linkUrl = new URL(parsedLink[1]);
                        const linkFields = linkUrl.searchParams.get('fields');
                        const linkPageToken = linkUrl.searchParams.get('page_info');
                        if (!pageInfo.fields && linkFields) {
                            pageInfo.fields = linkFields.split(',');
                        }
                        if (linkPageToken) {
                            switch (linkRel) {
                                case 'previous':
                                    pageInfo.previousPageUrl = parsedLink[1];
                                    pageInfo.prevPage = this.buildRequestParams(parsedLink[1]);
                                    break;
                                case 'next':
                                    pageInfo.nextPageUrl = parsedLink[1];
                                    pageInfo.nextPage = this.buildRequestParams(parsedLink[1]);
                                    break;
                            }
                        }
                    }
                }
                ret.pageInfo = pageInfo;
            }
            return ret;
        });
    }
    getRequestPath(path) {
        const cleanPath = super.getRequestPath(path);
        if (cleanPath.startsWith('/admin')) {
            return `${cleanPath.replace(/\.json$/, '')}.json`;
        }
        else {
            return `/admin/api/${this.apiVersion || this.restClass().config.apiVersion}${cleanPath.replace(/\.json$/, '')}.json`;
        }
    }
    restClass() {
        return this.constructor;
    }
    buildRequestParams(newPageUrl) {
        const pattern = `^/admin/api/[^/]+/(.*).json$`;
        const url = new URL(newPageUrl);
        const path = url.pathname.replace(new RegExp(pattern), '$1');
        return {
            path,
            query: Object.fromEntries(url.searchParams.entries()),
        };
    }
}
exports.RestClient = RestClient;
RestClient.LINK_HEADER_REGEXP = /<([^<]+)>; rel="([^"]+)"/;
RestClient.DEFAULT_LIMIT = '50';
function restClientClass(params) {
    const { config } = params;
    class NewRestClient extends RestClient {
    }
    NewRestClient.config = config;
    NewRestClient.scheme = 'https';
    Reflect.defineProperty(NewRestClient, 'name', {
        value: 'RestClient',
    });
    return NewRestClient;
}
exports.restClientClass = restClientClass;
//# sourceMappingURL=rest_client.js.map