"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class User extends base_1.Base {
    static find({ session, id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id },
                params: {},
            });
            return result.data ? result.data[0] : null;
        });
    }
    static all(_a) {
        var { session, limit = null, page_info = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit", "page_info"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit, "page_info": page_info }, otherArgs),
            });
            return response;
        });
    }
    static current(_a) {
        var { session } = _a, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "current",
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
exports.User = User;
User.apiVersion = types_1.ApiVersion.July22;
User.resourceName = 'user';
User.pluralName = 'users';
User.hasOne = {};
User.hasMany = {};
User.paths = [
    { "http_method": "get", "operation": "current", "ids": [], "path": "users/current.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "users.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "users/<id>.json" }
];
//# sourceMappingURL=user.js.map