"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlClientClass = exports.GraphqlClient = void 0;
const tslib_1 = require("tslib");
const types_1 = require("../../types");
const http_client_1 = require("../http_client/http_client");
const types_2 = require("../http_client/types");
const logger_1 = require("../../logger");
const ShopifyErrors = tslib_1.__importStar(require("../../error"));
class GraphqlClient {
    constructor(params) {
        this.baseApiPath = '/admin/api';
        const config = this.graphqlClass().config;
        if (!config.isCustomStoreApp && !params.session.accessToken) {
            throw new ShopifyErrors.MissingRequiredArgument('Missing access token when creating GraphQL client');
        }
        if (params.apiVersion) {
            const message = params.apiVersion === config.apiVersion
                ? `GraphQL client has a redundant API version override to the default ${params.apiVersion}`
                : `GraphQL client overriding default API version ${config.apiVersion} with ${params.apiVersion}`;
            (0, logger_1.logger)(config).debug(message);
        }
        this.session = params.session;
        this.apiVersion = params.apiVersion;
        this.client = new (this.graphqlClass().HttpClient)({
            domain: this.session.shop,
        });
    }
    query(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((typeof params.data === 'string' && params.data.length === 0) ||
                Object.entries(params.data).length === 0) {
                throw new ShopifyErrors.MissingRequiredArgument('Query missing.');
            }
            const apiHeaders = this.getApiHeaders();
            params.extraHeaders = Object.assign(Object.assign({}, apiHeaders), params.extraHeaders);
            const path = `${this.baseApiPath}/${this.apiVersion || this.graphqlClass().config.apiVersion}/graphql.json`;
            let dataType;
            if (typeof params.data === 'object') {
                dataType = types_2.DataType.JSON;
            }
            else {
                dataType = types_2.DataType.GraphQL;
            }
            const result = yield this.client.post(Object.assign({ path, type: dataType }, params));
            if (result.body.errors) {
                throw new ShopifyErrors.GraphqlQueryError({
                    message: 'GraphQL query returned errors',
                    response: result.body,
                    headers: result.headers,
                });
            }
            return result;
        });
    }
    getApiHeaders() {
        return {
            [types_1.ShopifyHeader.AccessToken]: this.graphqlClass().config.isCustomStoreApp
                ? this.graphqlClass().config.apiSecretKey
                : this.session.accessToken,
        };
    }
    graphqlClass() {
        return this.constructor;
    }
}
exports.GraphqlClient = GraphqlClient;
function graphqlClientClass(params) {
    const { config } = params;
    let { HttpClient } = params;
    if (!HttpClient) {
        HttpClient = (0, http_client_1.httpClientClass)(params.config);
    }
    class NewGraphqlClient extends GraphqlClient {
    }
    NewGraphqlClient.config = config;
    NewGraphqlClient.HttpClient = HttpClient;
    Reflect.defineProperty(NewGraphqlClient, 'name', {
        value: 'GraphqlClient',
    });
    return NewGraphqlClient;
}
exports.graphqlClientClass = graphqlClientClass;
//# sourceMappingURL=graphql_client.js.map