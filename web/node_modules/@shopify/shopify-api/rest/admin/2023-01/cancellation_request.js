"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancellationRequest = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class CancellationRequest extends base_1.Base {
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
        var { message = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["message", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "reject",
                session: this.session,
                urlIds: { "fulfillment_order_id": this.fulfillment_order_id },
                params: Object.assign({ "message": message }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.CancellationRequest = CancellationRequest;
CancellationRequest.apiVersion = types_1.ApiVersion.January23;
CancellationRequest.resourceName = 'cancellation_request';
CancellationRequest.pluralName = 'cancellation_requests';
CancellationRequest.hasOne = {};
CancellationRequest.hasMany = {};
CancellationRequest.paths = [
    { "http_method": "post", "operation": "accept", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/cancellation_request/accept.json" },
    { "http_method": "post", "operation": "post", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/cancellation_request.json" },
    { "http_method": "post", "operation": "reject", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/cancellation_request/reject.json" }
];
//# sourceMappingURL=cancellation_request.js.map