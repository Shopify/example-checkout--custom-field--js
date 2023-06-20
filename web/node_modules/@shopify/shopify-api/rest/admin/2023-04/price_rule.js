"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceRule = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class PriceRule extends base_1.Base {
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
        var { session, limit = null, since_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, starts_at_min = null, starts_at_max = null, ends_at_min = null, ends_at_max = null, times_used = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "starts_at_min", "starts_at_max", "ends_at_min", "ends_at_max", "times_used"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "starts_at_min": starts_at_min, "starts_at_max": starts_at_max, "ends_at_min": ends_at_min, "ends_at_max": ends_at_max, "times_used": times_used }, otherArgs),
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
exports.PriceRule = PriceRule;
PriceRule.apiVersion = types_1.ApiVersion.April23;
PriceRule.resourceName = 'price_rule';
PriceRule.pluralName = 'price_rules';
PriceRule.hasOne = {};
PriceRule.hasMany = {};
PriceRule.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "price_rules/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "price_rules/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "price_rules.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "price_rules/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "price_rules.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "price_rules/<id>.json" }
];
//# sourceMappingURL=price_rule.js.map