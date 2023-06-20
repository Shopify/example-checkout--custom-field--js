"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectToShopifyOrAppRoot = void 0;
var tslib_1 = require("tslib");
function redirectToShopifyOrAppRoot(_a) {
    var api = _a.api, config = _a.config;
    return function () {
        return function (req, res) {
            var _a, _b;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var host, redirectUrl, _c;
                return tslib_1.__generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (res.headersSent) {
                                config.logger.info('Response headers have already been sent, skipping redirection to host', { shop: (_b = (_a = res.locals.shopify) === null || _a === void 0 ? void 0 : _a.session) === null || _b === void 0 ? void 0 : _b.shop });
                                return [2 /*return*/];
                            }
                            host = api.utils.sanitizeHost(req.query.host);
                            if (!api.config.isEmbeddedApp) return [3 /*break*/, 2];
                            return [4 /*yield*/, api.auth.getEmbeddedAppUrl({
                                    rawRequest: req,
                                    rawResponse: res,
                                })];
                        case 1:
                            _c = _d.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _c = "/?shop=".concat(res.locals.shopify.session.shop, "&host=").concat(encodeURIComponent(host));
                            _d.label = 3;
                        case 3:
                            redirectUrl = _c;
                            config.logger.debug("Redirecting to host at ".concat(redirectUrl), {
                                shop: res.locals.shopify.session.shop,
                            });
                            res.redirect(redirectUrl);
                            return [2 /*return*/];
                    }
                });
            });
        };
    };
}
exports.redirectToShopifyOrAppRoot = redirectToShopifyOrAppRoot;
//# sourceMappingURL=redirect-to-shopify-or-app-root.js.map