"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionStorageError = exports.ShopifyAppError = void 0;
var tslib_1 = require("tslib");
var ShopifyAppError = /** @class */ (function (_super) {
    tslib_1.__extends(ShopifyAppError, _super);
    function ShopifyAppError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _newTarget = this.constructor;
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(args), false)) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return ShopifyAppError;
}(Error));
exports.ShopifyAppError = ShopifyAppError;
var SessionStorageError = /** @class */ (function (_super) {
    tslib_1.__extends(SessionStorageError, _super);
    function SessionStorageError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SessionStorageError;
}(ShopifyAppError));
exports.SessionStorageError = SessionStorageError;
//# sourceMappingURL=error.js.map