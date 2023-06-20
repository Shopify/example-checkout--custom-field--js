"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentEvent = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const country_1 = require("./country");
const province_1 = require("./province");
class FulfillmentEvent extends base_1.Base {
    static getJsonBodyName() {
        return "event";
    }
    static find({ session, id, order_id = null, fulfillment_id = null, event_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "order_id": order_id, "fulfillment_id": fulfillment_id },
                params: { "event_id": event_id },
            });
            return result.data ? result.data[0] : null;
        });
    }
    static delete({ session, id, order_id = null, fulfillment_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "id": id, "order_id": order_id, "fulfillment_id": fulfillment_id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, order_id = null, fulfillment_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "order_id", "fulfillment_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "order_id": order_id, "fulfillment_id": fulfillment_id },
                params: Object.assign({}, otherArgs),
            });
            return response;
        });
    }
}
exports.FulfillmentEvent = FulfillmentEvent;
FulfillmentEvent.apiVersion = types_1.ApiVersion.July22;
FulfillmentEvent.resourceName = 'fulfillment_event';
FulfillmentEvent.pluralName = 'fulfillment_events';
FulfillmentEvent.hasOne = {
    "country": country_1.Country,
    "province": province_1.Province
};
FulfillmentEvent.hasMany = {};
FulfillmentEvent.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["order_id", "fulfillment_id", "id"], "path": "orders/<order_id>/fulfillments/<fulfillment_id>/events/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id", "fulfillment_id"], "path": "orders/<order_id>/fulfillments/<fulfillment_id>/events.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id", "fulfillment_id", "id"], "path": "orders/<order_id>/fulfillments/<fulfillment_id>/events/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": ["order_id", "fulfillment_id"], "path": "orders/<order_id>/fulfillments/<fulfillment_id>/events.json" }
];
//# sourceMappingURL=fulfillment_event.js.map