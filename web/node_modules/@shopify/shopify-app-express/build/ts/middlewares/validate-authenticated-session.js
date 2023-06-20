"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthenticatedSession = void 0;
var tslib_1 = require("tslib");
var shopify_api_1 = require("@shopify/shopify-api");
var redirect_to_auth_1 = require("../redirect-to-auth");
var redirect_out_of_app_1 = require("../redirect-out-of-app");
var has_valid_access_token_1 = require("./has-valid-access-token");
function validateAuthenticatedSession(_a) {
    var api = _a.api, config = _a.config;
    return function validateAuthenticatedSession() {
        var _this = this;
        return function (req, res, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var sessionId, error_1, session, error_2, shop, bearerPresent, redirectUri;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        config.logger.info('Running validateAuthenticatedSession');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, api.session.getCurrentId({
                                isOnline: config.useOnlineTokens,
                                rawRequest: req,
                                rawResponse: res,
                            })];
                    case 2:
                        sessionId = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        config.logger.error("Error when loading session from storage: ".concat(error_1));
                        handleSessionError(req, res, error_1);
                        return [2 /*return*/, undefined];
                    case 4:
                        if (!sessionId) return [3 /*break*/, 8];
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, config.sessionStorage.loadSession(sessionId)];
                    case 6:
                        session = _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        error_2 = _b.sent();
                        config.logger.error("Error when loading session from storage: ".concat(error_2));
                        res.status(500);
                        res.send(error_2.message);
                        return [2 /*return*/, undefined];
                    case 8:
                        shop = api.utils.sanitizeShop(req.query.shop) || (session === null || session === void 0 ? void 0 : session.shop);
                        if (session && shop && session.shop !== shop) {
                            config.logger.debug('Found a session for a different shop in the request', { currentShop: session.shop, requestShop: shop });
                            return [2 /*return*/, (0, redirect_to_auth_1.redirectToAuth)({ req: req, res: res, api: api, config: config })];
                        }
                        if (!session) return [3 /*break*/, 10];
                        config.logger.debug('Request session found and loaded', {
                            shop: session.shop,
                        });
                        if (!session.isActive(api.config.scopes)) return [3 /*break*/, 10];
                        config.logger.debug('Request session exists and is active', {
                            shop: session.shop,
                        });
                        return [4 /*yield*/, (0, has_valid_access_token_1.hasValidAccessToken)(api, session)];
                    case 9:
                        if (_b.sent()) {
                            config.logger.info('Request session has a valid access token', {
                                shop: session.shop,
                            });
                            res.locals.shopify = tslib_1.__assign(tslib_1.__assign({}, res.locals.shopify), { session: session });
                            return [2 /*return*/, next()];
                        }
                        _b.label = 10;
                    case 10:
                        bearerPresent = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.match(/Bearer (.*)/);
                        if (!bearerPresent) return [3 /*break*/, 12];
                        if (!!shop) return [3 /*break*/, 12];
                        return [4 /*yield*/, setShopFromSessionOrToken(api, session, bearerPresent[1])];
                    case 11:
                        shop = _b.sent();
                        _b.label = 12;
                    case 12:
                        redirectUri = "".concat(config.auth.path, "?shop=").concat(shop);
                        config.logger.info("Session was not valid. Redirecting to ".concat(redirectUri), { shop: shop });
                        return [2 /*return*/, (0, redirect_out_of_app_1.redirectOutOfApp)({ config: config })({ req: req, res: res, redirectUri: redirectUri, shop: shop })];
                }
            });
        }); };
    };
}
exports.validateAuthenticatedSession = validateAuthenticatedSession;
function handleSessionError(_req, res, error) {
    switch (true) {
        case error instanceof shopify_api_1.InvalidJwtError:
            res.status(401);
            res.send(error.message);
            break;
        default:
            res.status(500);
            res.send(error.message);
            break;
    }
}
function setShopFromSessionOrToken(api, session, token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var shop, payload;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session) return [3 /*break*/, 1];
                    shop = session.shop;
                    return [3 /*break*/, 3];
                case 1:
                    if (!api.config.isEmbeddedApp) return [3 /*break*/, 3];
                    return [4 /*yield*/, api.session.decodeSessionToken(token)];
                case 2:
                    payload = _a.sent();
                    shop = payload.dest.replace('https://', '');
                    _a.label = 3;
                case 3: return [2 /*return*/, shop];
            }
        });
    });
}
//# sourceMappingURL=validate-authenticated-session.js.map