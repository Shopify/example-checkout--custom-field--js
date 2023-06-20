"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const customer_1 = require("./customer");
const discount_code_1 = require("./discount_code");
const fulfillment_1 = require("./fulfillment");
const refund_1 = require("./refund");
class Order extends base_1.Base {
    static find({ session, id, fields = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id },
                params: { "fields": fields },
            });
            return result.data ? result.data[0] : null;
        });
    }
    static delete({ session, id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "id": id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, ids = null, limit = null, since_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, processed_at_min = null, processed_at_max = null, attribution_app_id = null, status = null, financial_status = null, fulfillment_status = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "ids", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "processed_at_min", "processed_at_max", "attribution_app_id", "status", "financial_status", "fulfillment_status", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "ids": ids, "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "processed_at_min": processed_at_min, "processed_at_max": processed_at_max, "attribution_app_id": attribution_app_id, "status": status, "financial_status": financial_status, "fulfillment_status": fulfillment_status, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, status = null, financial_status = null, fulfillment_status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "status", "financial_status", "fulfillment_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "status": status, "financial_status": financial_status, "fulfillment_status": fulfillment_status }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    cancel(_a) {
        var { amount = null, currency = null, restock = null, reason = null, email = null, refund = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["amount", "currency", "restock", "reason", "email", "refund", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "cancel",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({ "amount": amount, "currency": currency, "restock": restock, "reason": reason, "email": email, "refund": refund }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    close(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "close",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    open(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "open",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.Order = Order;
Order.apiVersion = types_1.ApiVersion.July22;
Order.resourceName = 'order';
Order.pluralName = 'orders';
Order.hasOne = {
    "customer": customer_1.Customer
};
Order.hasMany = {
    "discount_codes": discount_code_1.DiscountCode,
    "fulfillments": fulfillment_1.Fulfillment,
    "refunds": refund_1.Refund
};
Order.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "orders/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "orders/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "orders.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "orders/<id>.json" },
    { "http_method": "post", "operation": "cancel", "ids": ["id"], "path": "orders/<id>/cancel.json" },
    { "http_method": "post", "operation": "close", "ids": ["id"], "path": "orders/<id>/close.json" },
    { "http_method": "post", "operation": "open", "ids": ["id"], "path": "orders/<id>/open.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "orders.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "orders/<id>.json" }
];
//# sourceMappingURL=order.js.map