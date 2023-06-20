"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlProxy = void 0;
const tslib_1 = require("tslib");
const ShopifyErrors = tslib_1.__importStar(require("../../error"));
const graphql_client_1 = require("./graphql_client");
function graphqlProxy(config) {
    return ({ session, rawBody, }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!session.accessToken) {
            throw new ShopifyErrors.InvalidSession('Cannot proxy query. Session not authenticated.');
        }
        const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
        const client = new GraphqlClient({ session });
        return client.query({
            data: rawBody,
        });
    });
}
exports.graphqlProxy = graphqlProxy;
//# sourceMappingURL=graphql_proxy.js.map