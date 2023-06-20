"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientClasses = void 0;
const http_client_1 = require("./http_client/http_client");
const rest_client_1 = require("./rest/rest_client");
const graphql_client_1 = require("./graphql/graphql_client");
const storefront_client_1 = require("./graphql/storefront_client");
const graphql_proxy_1 = require("./graphql/graphql_proxy");
function clientClasses(config) {
    const HttpClient = (0, http_client_1.httpClientClass)(config);
    return {
        // We don't pass in the HttpClient because the RestClient inherits from it, and goes through the same setup process
        Rest: (0, rest_client_1.restClientClass)({ config }),
        Graphql: (0, graphql_client_1.graphqlClientClass)({ config, HttpClient }),
        Storefront: (0, storefront_client_1.storefrontClientClass)({ config, HttpClient }),
        graphqlProxy: (0, graphql_proxy_1.graphqlProxy)(config),
    };
}
exports.clientClasses = clientClasses;
//# sourceMappingURL=index.js.map