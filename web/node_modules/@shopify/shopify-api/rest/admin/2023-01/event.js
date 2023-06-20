"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Event extends base_1.Base {
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
    static all(_a) {
        var { session, order_id = null, product_id = null, limit = null, since_id = null, created_at_min = null, created_at_max = null, filter = null, verb = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "order_id", "product_id", "limit", "since_id", "created_at_min", "created_at_max", "filter", "verb", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "order_id": order_id, "product_id": product_id },
                params: Object.assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "filter": filter, "verb": verb, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, created_at_min = null, created_at_max = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "created_at_min", "created_at_max"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "created_at_min": created_at_min, "created_at_max": created_at_max }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Event = Event;
Event.apiVersion = types_1.ApiVersion.January23;
Event.resourceName = 'event';
Event.pluralName = 'events';
Event.hasOne = {};
Event.hasMany = {};
Event.paths = [
    { "http_method": "get", "operation": "count", "ids": [], "path": "events/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "events.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "events/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/events.json" },
    { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "products/<product_id>/events.json" }
];
//# sourceMappingURL=event.js.map