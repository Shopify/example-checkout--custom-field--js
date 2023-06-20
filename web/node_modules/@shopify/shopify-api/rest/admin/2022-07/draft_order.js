"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftOrder = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const customer_1 = require("./customer");
class DraftOrder extends base_1.Base {
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
        var { session, fields = null, limit = null, since_id = null, updated_at_min = null, updated_at_max = null, ids = null, status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "fields", "limit", "since_id", "updated_at_min", "updated_at_max", "ids", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "fields": fields, "limit": limit, "since_id": since_id, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "ids": ids, "status": status }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, since_id = null, status = null, updated_at_max = null, updated_at_min = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "status", "updated_at_max", "updated_at_min"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "since_id": since_id, "status": status, "updated_at_max": updated_at_max, "updated_at_min": updated_at_min }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    send_invoice(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "send_invoice",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    complete(_a) {
        var { payment_gateway_id = null, payment_pending = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["payment_gateway_id", "payment_pending", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "put",
                operation: "complete",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({ "payment_gateway_id": payment_gateway_id, "payment_pending": payment_pending }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.DraftOrder = DraftOrder;
DraftOrder.apiVersion = types_1.ApiVersion.July22;
DraftOrder.resourceName = 'draft_order';
DraftOrder.pluralName = 'draft_orders';
DraftOrder.hasOne = {
    "customer": customer_1.Customer
};
DraftOrder.hasMany = {};
DraftOrder.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "draft_orders/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "draft_orders/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "draft_orders.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "draft_orders/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "draft_orders.json" },
    { "http_method": "post", "operation": "send_invoice", "ids": ["id"], "path": "draft_orders/<id>/send_invoice.json" },
    { "http_method": "put", "operation": "complete", "ids": ["id"], "path": "draft_orders/<id>/complete.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "draft_orders/<id>.json" }
];
//# sourceMappingURL=draft_order.js.map