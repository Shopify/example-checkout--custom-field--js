"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const province_1 = require("./province");
class Country extends base_1.Base {
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
        var { session, since_id = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "since_id": since_id, "fields": fields }, otherArgs),
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
exports.Country = Country;
Country.apiVersion = types_1.ApiVersion.July22;
Country.resourceName = 'country';
Country.pluralName = 'countries';
Country.hasOne = {};
Country.hasMany = {
    "provinces": province_1.Province
};
Country.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "countries/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "countries/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "countries.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "countries/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "countries.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "countries/<id>.json" }
];
//# sourceMappingURL=country.js.map