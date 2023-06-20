"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Fulfillment extends base_1.Base {
    static find({ session, id, order_id = null, fields = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "order_id": order_id },
                params: { "fields": fields },
            });
            return result.data ? result.data[0] : null;
        });
    }
    static all(_a) {
        var { session, fulfillment_order_id = null, order_id = null, created_at_max = null, created_at_min = null, fields = null, limit = null, since_id = null, updated_at_max = null, updated_at_min = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "fulfillment_order_id", "order_id", "created_at_max", "created_at_min", "fields", "limit", "since_id", "updated_at_max", "updated_at_min"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "fulfillment_order_id": fulfillment_order_id, "order_id": order_id },
                params: Object.assign({ "created_at_max": created_at_max, "created_at_min": created_at_min, "fields": fields, "limit": limit, "since_id": since_id, "updated_at_max": updated_at_max, "updated_at_min": updated_at_min }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, order_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "order_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: { "order_id": order_id },
                params: Object.assign({ "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    cancel(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "cancel",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    update_tracking(_a) {
        var { notify_customer = null, tracking_info = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["notify_customer", "tracking_info", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "update_tracking",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({ "notify_customer": notify_customer, "tracking_info": tracking_info }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.Fulfillment = Fulfillment;
Fulfillment.apiVersion = types_1.ApiVersion.April23;
Fulfillment.resourceName = 'fulfillment';
Fulfillment.pluralName = 'fulfillments';
Fulfillment.hasOne = {};
Fulfillment.hasMany = {};
Fulfillment.paths = [
    { "http_method": "get", "operation": "count", "ids": ["order_id"], "path": "orders/<order_id>/fulfillments/count.json" },
    { "http_method": "get", "operation": "get", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/fulfillments.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/fulfillments.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id", "id"], "path": "orders/<order_id>/fulfillments/<id>.json" },
    { "http_method": "post", "operation": "cancel", "ids": ["id"], "path": "fulfillments/<id>/cancel.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "fulfillments.json" },
    { "http_method": "post", "operation": "update_tracking", "ids": ["id"], "path": "fulfillments/<id>/update_tracking.json" }
];
//# sourceMappingURL=fulfillment.js.map