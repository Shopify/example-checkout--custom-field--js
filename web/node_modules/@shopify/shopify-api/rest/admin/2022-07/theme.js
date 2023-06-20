"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Theme extends base_1.Base {
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
        var { session, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "fields": fields }, otherArgs),
            });
            return response;
        });
    }
}
exports.Theme = Theme;
Theme.apiVersion = types_1.ApiVersion.July22;
Theme.resourceName = 'theme';
Theme.pluralName = 'themes';
Theme.hasOne = {};
Theme.hasMany = {};
Theme.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "themes/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "themes.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "themes/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "themes.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "themes/<id>.json" }
];
//# sourceMappingURL=theme.js.map