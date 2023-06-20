"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const discount_code_1 = require("./discount_code");
const order_1 = require("./order");
const gift_card_1 = require("./gift_card");
class Checkout extends base_1.Base {
    static find({ session, token }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "token": token },
                params: {},
            });
            return result.data ? result.data[0] : null;
        });
    }
    static shipping_rates(_a) {
        var { session, token } = _a, otherArgs = tslib_1.__rest(_a, ["session", "token"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "shipping_rates",
                session: session,
                urlIds: { "token": token },
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    complete(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "complete",
                session: this.session,
                urlIds: { "token": this.token },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.Checkout = Checkout;
Checkout.apiVersion = types_1.ApiVersion.October22;
Checkout.resourceName = 'checkout';
Checkout.pluralName = 'checkouts';
Checkout.hasOne = {
    "discount_code": discount_code_1.DiscountCode,
    "order": order_1.Order
};
Checkout.hasMany = {
    "gift_cards": gift_card_1.GiftCard
};
Checkout.paths = [
    { "http_method": "get", "operation": "get", "ids": ["token"], "path": "checkouts/<token>.json" },
    { "http_method": "get", "operation": "shipping_rates", "ids": ["token"], "path": "checkouts/<token>/shipping_rates.json" },
    { "http_method": "post", "operation": "complete", "ids": ["token"], "path": "checkouts/<token>/complete.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "checkouts.json" },
    { "http_method": "put", "operation": "put", "ids": ["token"], "path": "checkouts/<token>.json" }
];
Checkout.primaryKey = "token";
//# sourceMappingURL=checkout.js.map