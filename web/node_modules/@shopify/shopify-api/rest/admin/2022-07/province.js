"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Province = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Province extends base_1.Base {
    static find({ session, id, country_id = null, fields = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "country_id": country_id },
                params: { "fields": fields },
            });
            return result.data ? result.data[0] : null;
        });
    }
    static all(_a) {
        var { session, country_id = null, since_id = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "country_id", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "country_id": country_id },
                params: Object.assign({ "since_id": since_id, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, country_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "country_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: { "country_id": country_id },
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Province = Province;
Province.apiVersion = types_1.ApiVersion.July22;
Province.resourceName = 'province';
Province.pluralName = 'provinces';
Province.hasOne = {};
Province.hasMany = {};
Province.paths = [
    { "http_method": "get", "operation": "count", "ids": ["country_id"], "path": "countries/<country_id>/provinces/count.json" },
    { "http_method": "get", "operation": "get", "ids": ["country_id"], "path": "countries/<country_id>/provinces.json" },
    { "http_method": "get", "operation": "get", "ids": ["country_id", "id"], "path": "countries/<country_id>/provinces/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["country_id", "id"], "path": "countries/<country_id>/provinces/<id>.json" }
];
//# sourceMappingURL=province.js.map