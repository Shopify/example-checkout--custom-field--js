"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentRequest = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class FulfillmentRequest extends base_1.Base {
    accept(_a) {
        var { message = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["message", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "accept",
                session: this.session,
                urlIds: { "fulfillment_order_id": this.fulfillment_order_id },
                params: Object.assign({ "message": message }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    reject(_a) {
        var { message = null, reason = null, line_items = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["message", "reason", "line_items", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "reject",
                session: this.session,
                urlIds: { "fulfillment_order_id": this.fulfillment_order_id },
                params: Object.assign({ "message": message, "reason": reason, "line_items": line_items }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.FulfillmentRequest = FulfillmentRequest;
FulfillmentRequest.apiVersion = types_1.ApiVersion.July22;
FulfillmentRequest.resourceName = 'fulfillment_request';
FulfillmentRequest.pluralName = 'fulfillment_requests';
FulfillmentRequest.hasOne = {};
FulfillmentRequest.hasMany = {};
FulfillmentRequest.paths = [
    { "http_method": "post", "operation": "accept", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/fulfillment_request/accept.json" },
    { "http_method": "post", "operation": "post", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/fulfillment_request.json" },
    { "http_method": "post", "operation": "reject", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/fulfillment_request/reject.json" }
];
//# sourceMappingURL=fulfillment_request.js.map