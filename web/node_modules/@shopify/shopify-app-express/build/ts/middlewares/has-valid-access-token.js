"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasValidAccessToken = void 0;
var tslib_1 = require("tslib");
var shopify_api_1 = require("@shopify/shopify-api");
var TEST_GRAPHQL_QUERY = "\n{\n  shop {\n    name\n  }\n}";
function hasValidAccessToken(api, session) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var client, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    client = new api.clients.Graphql({ session: session });
                    return [4 /*yield*/, client.query({ data: TEST_GRAPHQL_QUERY })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
                case 2:
                    error_1 = _a.sent();
                    if (error_1 instanceof shopify_api_1.HttpResponseError && error_1.response.code === 401) {
                        // Re-authenticate if we get a 401 response
                        return [2 /*return*/, false];
                    }
                    else {
                        throw error_1;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.hasValidAccessToken = hasValidAccessToken;
//# sourceMappingURL=has-valid-access-token.js.map