"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppInstallationHandler = exports.ensureInstalled = void 0;
var tslib_1 = require("tslib");
var redirect_to_auth_1 = require("../redirect-to-auth");
var csp_headers_1 = require("./csp-headers");
var validate_authenticated_session_1 = require("./validate-authenticated-session");
var has_valid_access_token_1 = require("./has-valid-access-token");
function ensureInstalled(_a) {
    var api = _a.api, config = _a.config;
    return function ensureInstalledOnShop() {
        var _this = this;
        return function (req, res, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var shop, sessionId, session, exitIframeRE;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config.logger.info('Running ensureInstalledOnShop');
                        if (!api.config.isEmbeddedApp) {
                            config.logger.warning('ensureInstalledOnShop() should only be used in embedded apps; calling validateAuthenticatedSession() instead');
                            return [2 /*return*/, (0, validate_authenticated_session_1.validateAuthenticatedSession)({ api: api, config: config })()(req, res, next)];
                        }
                        shop = getRequestShop(api, config, req, res);
                        if (!shop) {
                            return [2 /*return*/, undefined];
                        }
                        config.logger.debug('Checking if shop has installed the app', { shop: shop });
                        sessionId = api.session.getOfflineId(shop);
                        return [4 /*yield*/, config.sessionStorage.loadSession(sessionId)];
                    case 1:
                        session = _a.sent();
                        exitIframeRE = new RegExp("^".concat(config.exitIframePath), 'i');
                        if (!session && !req.originalUrl.match(exitIframeRE)) {
                            config.logger.debug('App installation was not found for shop, redirecting to auth', { shop: shop });
                            return [2 /*return*/, (0, redirect_to_auth_1.redirectToAuth)({ req: req, res: res, api: api, config: config })];
                        }
                        if (!(api.config.isEmbeddedApp && req.query.embedded !== '1')) return [3 /*break*/, 5];
                        return [4 /*yield*/, sessionHasValidAccessToken(api, config, session)];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, embedAppIntoShopify(api, config, req, res, shop)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, undefined];
                    case 4:
                        config.logger.info('Found a session, but it is not valid. Redirecting to auth', { shop: shop });
                        return [2 /*return*/, (0, redirect_to_auth_1.redirectToAuth)({ req: req, res: res, api: api, config: config })];
                    case 5:
                        (0, csp_headers_1.addCSPHeader)(api, req, res);
                        config.logger.info('App is installed and ready to load', { shop: shop });
                        return [2 /*return*/, next()];
                }
            });
        }); };
    };
}
exports.ensureInstalled = ensureInstalled;
function deleteAppInstallationHandler(appInstallations, config) {
    return function (_topic, shop, _body, _webhookId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config.logger.debug('Deleting shop sessions', { shop: shop });
                        return [4 /*yield*/, appInstallations.delete(shop)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
}
exports.deleteAppInstallationHandler = deleteAppInstallationHandler;
function getRequestShop(api, config, req, res) {
    if (typeof req.query.shop !== 'string') {
        config.logger.error('ensureInstalledOnShop did not receive a shop query argument', { shop: req.query.shop });
        res.status(400);
        res.send('No shop provided');
        return undefined;
    }
    var shop = api.utils.sanitizeShop(req.query.shop);
    if (!shop) {
        config.logger.error('ensureInstalledOnShop did not receive a valid shop query argument', { shop: req.query.shop });
        res.status(422);
        res.send('Invalid shop provided');
        return undefined;
    }
    return shop;
}
function sessionHasValidAccessToken(api, config, session) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, error_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!session) {
                        return [2 /*return*/, false];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    _a = session.isActive(api.config.scopes);
                    if (!_a) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0, has_valid_access_token_1.hasValidAccessToken)(api, session)];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3: return [2 /*return*/, (_a)];
                case 4:
                    error_1 = _b.sent();
                    config.logger.error("Could not check if session was valid: ".concat(error_1), {
                        shop: session.shop,
                    });
                    return [2 /*return*/, false];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function embedAppIntoShopify(api, config, req, res, shop) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var embeddedUrl, error_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api.auth.getEmbeddedAppUrl({
                            rawRequest: req,
                            rawResponse: res,
                        })];
                case 1:
                    embeddedUrl = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    config.logger.error("ensureInstalledOnShop did not receive a host query argument", { shop: shop });
                    res.status(400);
                    res.send('No host provided');
                    return [2 /*return*/];
                case 3:
                    config.logger.debug("Request is not embedded but app is. Redirecting to ".concat(embeddedUrl, " to embed the app"), { shop: shop });
                    res.redirect(embeddedUrl + req.path);
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=ensure-installed-on-shop.js.map