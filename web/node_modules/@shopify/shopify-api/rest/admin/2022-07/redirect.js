"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redirect = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Redirect extends base_1.Base {
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
        var { session, limit = null, since_id = null, path = null, target = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "path", "target", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit, "since_id": since_id, "path": path, "target": target, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, path = null, target = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "path", "target"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "path": path, "target": target }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Redirect = Redirect;
Redirect.apiVersion = types_1.ApiVersion.July22;
Redirect.resourceName = 'redirect';
Redirect.pluralName = 'redirects';
Redirect.hasOne = {};
Redirect.hasMany = {};
Redirect.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "redirects/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "redirects/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "redirects.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "redirects/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "redirects.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "redirects/<id>.json" }
];
//# sourceMappingURL=redirect.js.map