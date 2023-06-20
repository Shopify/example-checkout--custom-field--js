"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processWebhooks = void 0;
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var shopify_api_1 = require("@shopify/shopify-api");
var app_installations_1 = require("../app-installations");
var middlewares_1 = require("../middlewares");
var process_1 = require("./process");
function processWebhooks(_a) {
    var api = _a.api, config = _a.config;
    return function (_a) {
        var _this = this;
        var webhookHandlers = _a.webhookHandlers;
        mountWebhooks(api, config, webhookHandlers);
        return [
            express_1.default.text({ type: '*/*' }),
            function (req, res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, process_1.process)({
                                req: req,
                                res: res,
                                api: api,
                                config: config,
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
        ];
    };
}
exports.processWebhooks = processWebhooks;
function mountWebhooks(api, config, handlers) {
    api.webhooks.addHandlers(handlers);
    // Add our custom app uninstalled webhook
    var appInstallations = new app_installations_1.AppInstallations(config);
    api.webhooks.addHandlers({
        APP_UNINSTALLED: {
            deliveryMethod: shopify_api_1.DeliveryMethod.Http,
            callbackUrl: config.webhooks.path,
            callback: (0, middlewares_1.deleteAppInstallationHandler)(appInstallations, config),
        },
    });
}
//# sourceMappingURL=index.js.map