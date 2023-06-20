"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCSPHeader = exports.cspHeaders = void 0;
var tslib_1 = require("tslib");
function cspHeaders(_a) {
    var api = _a.api;
    return function cspHeaders() {
        var _this = this;
        return function (req, res, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                addCSPHeader(api, req, res);
                next();
                return [2 /*return*/];
            });
        }); };
    };
}
exports.cspHeaders = cspHeaders;
function addCSPHeader(api, req, res) {
    var shop = api.utils.sanitizeShop(req.query.shop);
    if (api.config.isEmbeddedApp && shop) {
        res.setHeader('Content-Security-Policy', "frame-ancestors https://".concat(encodeURIComponent(shop), " https://admin.shopify.com;"));
    }
    else {
        res.setHeader('Content-Security-Policy', "frame-ancestors 'none';");
    }
}
exports.addCSPHeader = addCSPHeader;
//# sourceMappingURL=csp-headers.js.map