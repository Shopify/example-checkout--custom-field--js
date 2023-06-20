"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Comment extends base_1.Base {
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
        var { session, limit = null, since_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, published_at_min = null, published_at_max = null, fields = null, published_status = null, status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "fields", "published_status", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "fields": fields, "published_status": published_status, "status": status }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, published_at_min = null, published_at_max = null, published_status = null, status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status, "status": status }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    approve(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "approve",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    not_spam(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "not_spam",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    remove(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "remove",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    restore(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "restore",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    spam(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "spam",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.Comment = Comment;
Comment.apiVersion = types_1.ApiVersion.January23;
Comment.resourceName = 'comment';
Comment.pluralName = 'comments';
Comment.hasOne = {};
Comment.hasMany = {};
Comment.paths = [
    { "http_method": "get", "operation": "count", "ids": [], "path": "comments/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "comments.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "comments/<id>.json" },
    { "http_method": "post", "operation": "approve", "ids": ["id"], "path": "comments/<id>/approve.json" },
    { "http_method": "post", "operation": "not_spam", "ids": ["id"], "path": "comments/<id>/not_spam.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "comments.json" },
    { "http_method": "post", "operation": "remove", "ids": ["id"], "path": "comments/<id>/remove.json" },
    { "http_method": "post", "operation": "restore", "ids": ["id"], "path": "comments/<id>/restore.json" },
    { "http_method": "post", "operation": "spam", "ids": ["id"], "path": "comments/<id>/spam.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "comments/<id>.json" }
];
//# sourceMappingURL=comment.js.map