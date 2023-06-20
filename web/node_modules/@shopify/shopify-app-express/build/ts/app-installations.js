"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInstallations = void 0;
var tslib_1 = require("tslib");
var AppInstallations = /** @class */ (function () {
    function AppInstallations(config) {
        if (!config.sessionStorage.findSessionsByShop) {
            throw new Error('To use this Express package, you must provide a session storage manager that implements findSessionsByShop');
        }
        if (!config.sessionStorage.deleteSessions) {
            throw new Error('To use this Express package, you must provide a session storage manager that implements deleteSessions');
        }
        this.sessionStorage = config.sessionStorage;
    }
    AppInstallations.prototype.includes = function (shopDomain) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var shopSessions, shopSessions_1, shopSessions_1_1, session;
            var e_1, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.sessionStorage.findSessionsByShop(shopDomain)];
                    case 1:
                        shopSessions = _b.sent();
                        if (shopSessions.length > 0) {
                            try {
                                for (shopSessions_1 = tslib_1.__values(shopSessions), shopSessions_1_1 = shopSessions_1.next(); !shopSessions_1_1.done; shopSessions_1_1 = shopSessions_1.next()) {
                                    session = shopSessions_1_1.value;
                                    if (session.accessToken)
                                        return [2 /*return*/, true];
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (shopSessions_1_1 && !shopSessions_1_1.done && (_a = shopSessions_1.return)) _a.call(shopSessions_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    AppInstallations.prototype.delete = function (shopDomain) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var shopSessions;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sessionStorage.findSessionsByShop(shopDomain)];
                    case 1:
                        shopSessions = _a.sent();
                        if (!(shopSessions.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sessionStorage.deleteSessions(shopSessions.map(function (session) { return session.id; }))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AppInstallations;
}());
exports.AppInstallations = AppInstallations;
//# sourceMappingURL=app-installations.js.map