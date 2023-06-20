"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectToAuth = void 0;
var tslib_1 = require("tslib");
var redirect_out_of_app_1 = require("./redirect-out-of-app");
function redirectToAuth(_a) {
    var req = _a.req, res = _a.res, api = _a.api, config = _a.config, _b = _a.isOnline, isOnline = _b === void 0 ? false : _b;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var shop;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    shop = api.utils.sanitizeShop(req.query.shop);
                    if (!shop) {
                        config.logger.error('No shop provided to redirect to auth');
                        res.status(500);
                        res.send('No shop provided');
                        return [2 /*return*/];
                    }
                    if (!(req.query.embedded === '1')) return [3 /*break*/, 1];
                    clientSideRedirect(api, config, req, res, shop);
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, serverSideRedirect(api, config, req, res, shop, isOnline)];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.redirectToAuth = redirectToAuth;
function clientSideRedirect(api, config, req, res, shop) {
    var host = api.utils.sanitizeHost(req.query.host);
    if (!host) {
        res.status(500);
        res.send('No host provided');
        return;
    }
    var redirectUriParams = new URLSearchParams({ shop: shop, host: host }).toString();
    var redirectUri = "".concat(api.config.hostScheme, "://").concat(api.config.hostName).concat(config.auth.path, "?").concat(redirectUriParams);
    (0, redirect_out_of_app_1.redirectOutOfApp)({ config: config })({ req: req, res: res, redirectUri: redirectUri, shop: shop });
}
function serverSideRedirect(api, config, req, res, shop, isOnline) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config.logger.debug("Redirecting to auth at ".concat(config.auth.path, ", with callback ").concat(config.auth.callbackPath), { shop: shop, isOnline: isOnline });
                    return [4 /*yield*/, api.auth.begin({
                            callbackPath: config.auth.callbackPath,
                            shop: shop,
                            isOnline: isOnline,
                            rawRequest: req,
                            rawResponse: res,
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=redirect-to-auth.js.map