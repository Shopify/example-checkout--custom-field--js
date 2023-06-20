"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const metafield_1 = require("./metafield");
class Article extends base_1.Base {
    static find({ session, id, blog_id = null, fields = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "blog_id": blog_id },
                params: { "fields": fields },
            });
            return result.data ? result.data[0] : null;
        });
    }
    static delete({ session, id, blog_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "id": id, "blog_id": blog_id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, blog_id = null, limit = null, since_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, published_at_min = null, published_at_max = null, published_status = null, handle = null, tag = null, author = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "blog_id", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status", "handle", "tag", "author", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "blog_id": blog_id },
                params: Object.assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status, "handle": handle, "tag": tag, "author": author, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static authors(_a) {
        var { session } = _a, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "authors",
                session: session,
                urlIds: {},
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    static count(_a) {
        var { session, blog_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, published_at_min = null, published_at_max = null, published_status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "blog_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: { "blog_id": blog_id },
                params: Object.assign({ "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    static tags(_a) {
        var { session, blog_id = null, limit = null, popular = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "blog_id", "limit", "popular"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "tags",
                session: session,
                urlIds: { "blog_id": blog_id },
                params: Object.assign({ "limit": limit, "popular": popular }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Article = Article;
Article.apiVersion = types_1.ApiVersion.July22;
Article.resourceName = 'article';
Article.pluralName = 'articles';
Article.hasOne = {};
Article.hasMany = {
    "metafields": metafield_1.Metafield
};
Article.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/articles/<id>.json" },
    { "http_method": "get", "operation": "authors", "ids": [], "path": "articles/authors.json" },
    { "http_method": "get", "operation": "count", "ids": ["blog_id"], "path": "blogs/<blog_id>/articles/count.json" },
    { "http_method": "get", "operation": "get", "ids": ["blog_id"], "path": "blogs/<blog_id>/articles.json" },
    { "http_method": "get", "operation": "get", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/articles/<id>.json" },
    { "http_method": "get", "operation": "tags", "ids": [], "path": "articles/tags.json" },
    { "http_method": "get", "operation": "tags", "ids": ["blog_id"], "path": "blogs/<blog_id>/articles/tags.json" },
    { "http_method": "post", "operation": "post", "ids": ["blog_id"], "path": "blogs/<blog_id>/articles.json" },
    { "http_method": "put", "operation": "put", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/articles/<id>.json" }
];
//# sourceMappingURL=article.js.map