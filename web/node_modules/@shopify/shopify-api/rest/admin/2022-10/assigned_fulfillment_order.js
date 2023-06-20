"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignedFulfillmentOrder = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class AssignedFulfillmentOrder extends base_1.Base {
    static all(_a) {
        var { session, assignment_status = null, location_ids = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "assignment_status", "location_ids"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "assignment_status": assignment_status, "location_ids": location_ids }, otherArgs),
            });
            return response;
        });
    }
}
exports.AssignedFulfillmentOrder = AssignedFulfillmentOrder;
AssignedFulfillmentOrder.apiVersion = types_1.ApiVersion.October22;
AssignedFulfillmentOrder.resourceName = 'fulfillment_order';
AssignedFulfillmentOrder.pluralName = 'fulfillment_orders';
AssignedFulfillmentOrder.hasOne = {};
AssignedFulfillmentOrder.hasMany = {};
AssignedFulfillmentOrder.paths = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "assigned_fulfillment_orders.json" }
];
//# sourceMappingURL=assigned_fulfillment_order.js.map