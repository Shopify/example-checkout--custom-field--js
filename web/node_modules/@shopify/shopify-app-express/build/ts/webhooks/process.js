"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.process = void 0;
var tslib_1 = require("tslib");
function process(_a) {
    var req = _a.req, res = _a.res, api = _a.api, config = _a.config;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var error_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api.webhooks.process({
                            rawBody: req.body,
                            rawRequest: req,
                            rawResponse: res,
                        })];
                case 1:
                    _b.sent();
                    config.logger.info('Webhook processed, returned status code 200');
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    config.logger.error("Failed to process webhook: ".concat(error_1));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.process = process;
//# sourceMappingURL=process.js.map