"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCollection = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class CustomCollection extends base_1.Base {
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
        var { session, limit = null, ids = null, since_id = null, title = null, product_id = null, handle = null, updated_at_min = null, updated_at_max = null, published_at_min = null, published_at_max = null, published_status = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit", "ids", "since_id", "title", "product_id", "handle", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit, "ids": ids, "since_id": since_id, "title": title, "product_id": product_id, "handle": handle, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, title = null, product_id = null, updated_at_min = null, updated_at_max = null, published_at_min = null, published_at_max = null, published_status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "title", "product_id", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "title": title, "product_id": product_id, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.CustomCollection = CustomCollection;
CustomCollection.apiVersion = types_1.ApiVersion.July22;
CustomCollection.resourceName = 'custom_collection';
CustomCollection.pluralName = 'custom_collections';
CustomCollection.hasOne = {};
CustomCollection.hasMany = {};
CustomCollection.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "custom_collections/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "custom_collections/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "custom_collections.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "custom_collections/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "custom_collections.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "custom_collections/<id>.json" }
];
//# sourceMappingURL=custom_collection.js.map