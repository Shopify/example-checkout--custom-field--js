"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhook = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Webhook extends base_1.Base {
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
        var { session, address = null, created_at_max = null, created_at_min = null, fields = null, limit = null, since_id = null, topic = null, updated_at_min = null, updated_at_max = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "address", "created_at_max", "created_at_min", "fields", "limit", "since_id", "topic", "updated_at_min", "updated_at_max"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "address": address, "created_at_max": created_at_max, "created_at_min": created_at_min, "fields": fields, "limit": limit, "since_id": since_id, "topic": topic, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, address = null, topic = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "address", "topic"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "address": address, "topic": topic }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Webhook = Webhook;
Webhook.apiVersion = types_1.ApiVersion.April23;
Webhook.resourceName = 'webhook';
Webhook.pluralName = 'webhooks';
Webhook.hasOne = {};
Webhook.hasMany = {};
Webhook.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "webhooks/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "webhooks/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "webhooks.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "webhooks/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "webhooks.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "webhooks/<id>.json" }
];
//# sourceMappingURL=webhook.js.map