"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
const tslib_1 = require("tslib");
const graphql_client_1 = require("../clients/graphql/graphql_client");
const error_1 = require("../error");
function check(config) {
    return function ({ session, plans, isTest = true, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!config.billing) {
                throw new error_1.BillingError({
                    message: 'Attempted to look for purchases without billing configs',
                    errorData: [],
                });
            }
            const GraphqlClient = (0, graphql_client_1.graphqlClientClass)({ config });
            const client = new GraphqlClient({ session });
            const plansArray = Array.isArray(plans) ? plans : [plans];
            return hasActivePayment({
                plans: plansArray,
                client,
                isTest,
            });
        });
    };
}
exports.check = check;
function hasActivePayment({ plans, client, isTest, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let installation;
        let endCursor = null;
        do {
            const currentInstallations = yield client.query({
                data: {
                    query: HAS_PAYMENTS_QUERY,
                    variables: { endCursor },
                },
            });
            installation = currentInstallations.body.data.currentAppInstallation;
            if (hasSubscription({ plans, isTest, installation }) ||
                hasOneTimePayment({ plans, isTest, installation })) {
                return true;
            }
            endCursor = installation.oneTimePurchases.pageInfo.endCursor;
        } while (installation === null || installation === void 0 ? void 0 : installation.oneTimePurchases.pageInfo.hasNextPage);
        return false;
    });
}
function hasSubscription({ plans, isTest, installation, }) {
    return installation.activeSubscriptions.some((subscription) => plans.includes(subscription.name) && (isTest || !subscription.test));
}
function hasOneTimePayment({ plans, isTest, installation, }) {
    return installation.oneTimePurchases.edges.some((purchase) => plans.includes(purchase.node.name) &&
        (isTest || !purchase.node.test) &&
        purchase.node.status === 'ACTIVE');
}
const HAS_PAYMENTS_QUERY = `
  query appSubscription($endCursor: String) {
    currentAppInstallation {
      activeSubscriptions {
        name
        test
      }

      oneTimePurchases(first: 250, sortKey: CREATED_AT, after: $endCursor) {
        edges {
          node {
            name
            test
            status
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
//# sourceMappingURL=check.js.map