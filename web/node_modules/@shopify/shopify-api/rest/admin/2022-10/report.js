"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Report extends base_1.Base {
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
        var { session, ids = null, limit = null, since_id = null, updated_at_min = null, updated_at_max = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "ids", "limit", "since_id", "updated_at_min", "updated_at_max", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "ids": ids, "limit": limit, "since_id": since_id, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
}
exports.Report = Report;
Report.apiVersion = types_1.ApiVersion.October22;
Report.resourceName = 'report';
Report.pluralName = 'reports';
Report.hasOne = {};
Report.hasMany = {};
Report.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "reports/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "reports.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "reports/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "reports.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "reports/<id>.json" }
];
//# sourceMappingURL=report.js.map