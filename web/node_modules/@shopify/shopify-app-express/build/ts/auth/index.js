"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var tslib_1 = require("tslib");
var redirect_to_auth_1 = require("../redirect-to-auth");
var auth_callback_1 = require("./auth-callback");
function auth(_a) {
    var api = _a.api, config = _a.config;
    return {
        begin: function () {
            var _this = this;
            return function (req, res) { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, (0, redirect_to_auth_1.redirectToAuth)({ req: req, res: res, api: api, config: config })];
            }); }); };
        },
        callback: function () {
            var _this = this;
            return function (req, res, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var oauthCompleted;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            config.logger.info('Handling request to complete OAuth process');
                            return [4 /*yield*/, (0, auth_callback_1.authCallback)({
                                    req: req,
                                    res: res,
                                    api: api,
                                    config: config,
                                })];
                        case 1:
                            oauthCompleted = _a.sent();
                            if (oauthCompleted) {
                                next();
                            }
                            return [2 /*return*/];
                    }
                });
            }); };
        },
    };
}
exports.auth = auth;
//# sourceMappingURL=index.js.map