"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const metafield_1 = require("./metafield");
class Page extends base_1.Base {
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
        var { session, limit = null, since_id = null, title = null, handle = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, published_at_min = null, published_at_max = null, fields = null, published_status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "title", "handle", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "fields", "published_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit, "since_id": since_id, "title": title, "handle": handle, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "fields": fields, "published_status": published_status }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, title = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, published_at_min = null, published_at_max = null, published_status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "title", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "title": title, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Page = Page;
Page.apiVersion = types_1.ApiVersion.January23;
Page.resourceName = 'page';
Page.pluralName = 'pages';
Page.hasOne = {
    "metafield": metafield_1.Metafield
};
Page.hasMany = {};
Page.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "pages/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "pages/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "pages.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "pages/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "pages.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "pages/<id>.json" }
];
//# sourceMappingURL=page.js.map