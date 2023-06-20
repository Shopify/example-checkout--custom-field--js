"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentOrder = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class FulfillmentOrder extends base_1.Base {
    static find({ session, id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id },
                params: {},
            });
            return result.data ? result.data[0] : null;
        });
    }
    static all(_a) {
        var { session, order_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "order_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "order_id": order_id },
                params: Object.assign({}, otherArgs),
            });
            return response;
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
    close(_a) {
        var { message = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["message", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "close",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({ "message": message }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    hold(_a) {
        var { fulfillment_hold = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["fulfillment_hold", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "hold",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({ "fulfillment_hold": fulfillment_hold }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    move(_a) {
        var { fulfillment_order = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["fulfillment_order", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "move",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({ "fulfillment_order": fulfillment_order }, otherArgs),
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
    release_hold(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "release_hold",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    reschedule(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "reschedule",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    set_fulfillment_orders_deadline(_a) {
        var { fulfillment_order_ids = null, fulfillment_deadline = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["fulfillment_order_ids", "fulfillment_deadline", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "set_fulfillment_orders_deadline",
                session: this.session,
                urlIds: {},
                params: Object.assign({ "fulfillment_order_ids": fulfillment_order_ids, "fulfillment_deadline": fulfillment_deadline }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.FulfillmentOrder = FulfillmentOrder;
FulfillmentOrder.apiVersion = types_1.ApiVersion.April23;
FulfillmentOrder.resourceName = 'fulfillment_order';
FulfillmentOrder.pluralName = 'fulfillment_orders';
FulfillmentOrder.hasOne = {};
FulfillmentOrder.hasMany = {};
FulfillmentOrder.paths = [
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "fulfillment_orders/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/fulfillment_orders.json" },
    { "http_method": "post", "operation": "cancel", "ids": ["id"], "path": "fulfillment_orders/<id>/cancel.json" },
    { "http_method": "post", "operation": "close", "ids": ["id"], "path": "fulfillment_orders/<id>/close.json" },
    { "http_method": "post", "operation": "hold", "ids": ["id"], "path": "fulfillment_orders/<id>/hold.json" },
    { "http_method": "post", "operation": "move", "ids": ["id"], "path": "fulfillment_orders/<id>/move.json" },
    { "http_method": "post", "operation": "open", "ids": ["id"], "path": "fulfillment_orders/<id>/open.json" },
    { "http_method": "post", "operation": "release_hold", "ids": ["id"], "path": "fulfillment_orders/<id>/release_hold.json" },
    { "http_method": "post", "operation": "reschedule", "ids": ["id"], "path": "fulfillment_orders/<id>/reschedule.json" },
    { "http_method": "post", "operation": "set_fulfillment_orders_deadline", "ids": [], "path": "fulfillment_orders/set_fulfillment_orders_deadline.json" }
];
//# sourceMappingURL=fulfillment_order.js.map