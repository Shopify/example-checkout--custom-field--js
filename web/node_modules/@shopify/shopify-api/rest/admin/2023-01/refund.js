"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refund = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const transaction_1 = require("./transaction");
class Refund extends base_1.Base {
    static find({ session, id, order_id = null, fields = null, in_shop_currency = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "order_id": order_id },
                params: { "fields": fields, "in_shop_currency": in_shop_currency },
            });
            return result.data ? result.data[0] : null;
        });
    }
    static all(_a) {
        var { session, order_id = null, limit = null, fields = null, in_shop_currency = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "order_id", "limit", "fields", "in_shop_currency"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "order_id": order_id },
                params: Object.assign({ "limit": limit, "fields": fields, "in_shop_currency": in_shop_currency }, otherArgs),
            });
            return response;
        });
    }
    calculate(_a) {
        var { shipping = null, refund_line_items = null, currency = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["shipping", "refund_line_items", "currency", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "calculate",
                session: this.session,
                urlIds: { "order_id": this.order_id },
                params: Object.assign({ "shipping": shipping, "refund_line_items": refund_line_items, "currency": currency }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.Refund = Refund;
Refund.apiVersion = types_1.ApiVersion.January23;
Refund.resourceName = 'refund';
Refund.pluralName = 'refunds';
Refund.hasOne = {};
Refund.hasMany = {
    "transactions": transaction_1.Transaction
};
Refund.paths = [
    { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/refunds.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id", "id"], "path": "orders/<order_id>/refunds/<id>.json" },
    { "http_method": "post", "operation": "calculate", "ids": ["order_id"], "path": "orders/<order_id>/refunds/calculate.json" },
    { "http_method": "post", "operation": "post", "ids": ["order_id"], "path": "orders/<order_id>/refunds.json" }
];
//# sourceMappingURL=refund.js.map