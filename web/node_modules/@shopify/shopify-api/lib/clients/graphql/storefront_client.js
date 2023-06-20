"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storefrontClientClass = exports.StorefrontClient = void 0;
const version_1 = require("../../version");
const types_1 = require("../../types");
const http_client_1 = require("../http_client/http_client");
const session_1 = require("../../session/session");
const logger_1 = require("../../logger");
const graphql_client_1 = require("./graphql_client");
class StorefrontClient extends graphql_client_1.GraphqlClient {
    constructor(params) {
        const session = new session_1.Session({
            shop: params.domain,
            id: '',
            state: '',
            isOnline: true,
            accessToken: params.storefrontAccessToken,
        });
        super({ session, apiVersion: params.apiVersion });
        this.baseApiPath = '/api';
        const config = this.storefrontClass().config;
        if (params.apiVersion) {
            const message = params.apiVersion === config.apiVersion
                ? `Storefront client has a redundant API version override to the default ${params.apiVersion}`
                : `Storefront client overriding default API version ${config.apiVersion} with ${params.apiVersion}`;
            (0, logger_1.logger)(config).debug(message);
        }
        this.domain = params.domain;
        this.storefrontAccessToken = params.storefrontAccessToken;
    }
    getApiHeaders() {
        const sdkVariant = types_1.LIBRARY_NAME.toLowerCase().split(' ').join('-');
        return {
            [types_1.ShopifyHeader.StorefrontAccessToken]: this.storefrontClass().config
                .isCustomStoreApp
                ? this.storefrontClass().config.privateAppStorefrontAccessToken ||
                    this.storefrontAccessToken
                : this.storefrontAccessToken,
            [types_1.ShopifyHeader.StorefrontSDKVariant]: sdkVariant,
            [types_1.ShopifyHeader.StorefrontSDKVersion]: version_1.SHOPIFY_API_LIBRARY_VERSION,
        };
    }
    storefrontClass() {
        return this.constructor;
    }
}
exports.StorefrontClient = StorefrontClient;
function storefrontClientClass(params) {
    const { config } = params;
    let { HttpClient } = params;
    if (!HttpClient) {
        HttpClient = (0, http_client_1.httpClientClass)(config);
    }
    class NewStorefrontClient extends StorefrontClient {
    }
    NewStorefrontClient.config = config;
    NewStorefrontClient.HttpClient = HttpClient;
    Reflect.defineProperty(NewStorefrontClient, 'name', {
        value: 'StorefrontClient',
    });
    return NewStorefrontClient;
}
exports.storefrontClientClass = storefrontClientClass;
//# sourceMappingURL=storefront_client.js.map