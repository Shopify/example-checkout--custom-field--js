"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Asset extends base_1.Base {
    static delete({ session, theme_id = null, asset = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "theme_id": theme_id },
                params: { "asset": asset },
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, theme_id = null, fields = null, asset = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "theme_id", "fields", "asset"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "theme_id": theme_id },
                params: Object.assign({ "fields": fields, "asset": asset }, otherArgs),
            });
            return response;
        });
    }
}
exports.Asset = Asset;
Asset.apiVersion = types_1.ApiVersion.April23;
Asset.resourceName = 'asset';
Asset.pluralName = 'assets';
Asset.hasOne = {};
Asset.hasMany = {};
Asset.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["theme_id"], "path": "themes/<theme_id>/assets.json" },
    { "http_method": "get", "operation": "get", "ids": ["theme_id"], "path": "themes/<theme_id>/assets.json" },
    { "http_method": "get", "operation": "get", "ids": ["theme_id"], "path": "themes/<theme_id>/assets.json" },
    { "http_method": "put", "operation": "put", "ids": ["theme_id"], "path": "themes/<theme_id>/assets.json" }
];
Asset.primaryKey = "key";
//# sourceMappingURL=asset.js.map