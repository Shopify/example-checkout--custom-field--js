"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptTag = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class ScriptTag extends base_1.Base {
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
        var { session, limit = null, since_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, src = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "src", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "src": src, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, src = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "src"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "src": src }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.ScriptTag = ScriptTag;
ScriptTag.apiVersion = types_1.ApiVersion.January23;
ScriptTag.resourceName = 'script_tag';
ScriptTag.pluralName = 'script_tags';
ScriptTag.hasOne = {};
ScriptTag.hasMany = {};
ScriptTag.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "script_tags/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "script_tags/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "script_tags.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "script_tags/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "script_tags.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "script_tags/<id>.json" }
];
//# sourceMappingURL=script_tag.js.map