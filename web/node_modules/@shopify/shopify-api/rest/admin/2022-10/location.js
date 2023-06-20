"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Location extends base_1.Base {
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
        var { session } = _a, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({}, otherArgs),
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
    static inventory_levels(_a) {
        var { session, id } = _a, otherArgs = tslib_1.__rest(_a, ["session", "id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "inventory_levels",
                session: session,
                urlIds: { "id": id },
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Location = Location;
Location.apiVersion = types_1.ApiVersion.October22;
Location.resourceName = 'location';
Location.pluralName = 'locations';
Location.hasOne = {};
Location.hasMany = {};
Location.paths = [
    { "http_method": "get", "operation": "count", "ids": [], "path": "locations/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "locations.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "locations/<id>.json" },
    { "http_method": "get", "operation": "inventory_levels", "ids": ["id"], "path": "locations/<id>/inventory_levels.json" }
];
//# sourceMappingURL=location.js.map