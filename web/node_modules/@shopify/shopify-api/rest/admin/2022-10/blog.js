"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const metafield_1 = require("./metafield");
class Blog extends base_1.Base {
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
        var { session, limit = null, since_id = null, handle = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "handle", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit, "since_id": since_id, "handle": handle, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session } = _a, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Blog = Blog;
Blog.apiVersion = types_1.ApiVersion.October22;
Blog.resourceName = 'blog';
Blog.pluralName = 'blogs';
Blog.hasOne = {};
Blog.hasMany = {
    "metafields": metafield_1.Metafield
};
Blog.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "blogs/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "blogs/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "blogs.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "blogs/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "blogs.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "blogs/<id>.json" }
];
//# sourceMappingURL=blog.js.map