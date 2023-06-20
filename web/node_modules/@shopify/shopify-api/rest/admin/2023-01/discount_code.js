"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountCode = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class DiscountCode extends base_1.Base {
    static find({ session, id, price_rule_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "price_rule_id": price_rule_id },
                params: {},
            });
            return result.data ? result.data[0] : null;
        });
    }
    static delete({ session, id, price_rule_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "id": id, "price_rule_id": price_rule_id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, price_rule_id = null, batch_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "price_rule_id", "batch_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "price_rule_id": price_rule_id, "batch_id": batch_id },
                params: Object.assign({}, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, times_used = null, times_used_min = null, times_used_max = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "times_used", "times_used_min", "times_used_max"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "times_used": times_used, "times_used_min": times_used_min, "times_used_max": times_used_max }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    static get_all(_a) {
        var { session, price_rule_id = null, batch_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "price_rule_id", "batch_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "get_all",
                session: session,
                urlIds: { "price_rule_id": price_rule_id, "batch_id": batch_id },
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    static lookup(_a) {
        var { session, code = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "code"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "lookup",
                session: session,
                urlIds: {},
                params: Object.assign({ "code": code }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    batch(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "batch",
                session: this.session,
                urlIds: { "price_rule_id": this.price_rule_id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.DiscountCode = DiscountCode;
DiscountCode.apiVersion = types_1.ApiVersion.January23;
DiscountCode.resourceName = 'discount_code';
DiscountCode.pluralName = 'discount_codes';
DiscountCode.hasOne = {};
DiscountCode.hasMany = {};
DiscountCode.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["price_rule_id", "id"], "path": "price_rules/<price_rule_id>/discount_codes/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "discount_codes/count.json" },
    { "http_method": "get", "operation": "get", "ids": ["price_rule_id", "batch_id"], "path": "price_rules/<price_rule_id>/batch/<batch_id>/discount_codes.json" },
    { "http_method": "get", "operation": "get", "ids": ["price_rule_id"], "path": "price_rules/<price_rule_id>/discount_codes.json" },
    { "http_method": "get", "operation": "get", "ids": ["price_rule_id", "id"], "path": "price_rules/<price_rule_id>/discount_codes/<id>.json" },
    { "http_method": "get", "operation": "get_all", "ids": ["price_rule_id", "batch_id"], "path": "price_rules/<price_rule_id>/batch/<batch_id>.json" },
    { "http_method": "get", "operation": "lookup", "ids": [], "path": "discount_codes/lookup.json" },
    { "http_method": "post", "operation": "batch", "ids": ["price_rule_id"], "path": "price_rules/<price_rule_id>/batch.json" },
    { "http_method": "post", "operation": "post", "ids": ["price_rule_id"], "path": "price_rules/<price_rule_id>/discount_codes.json" },
    { "http_method": "put", "operation": "put", "ids": ["price_rule_id", "id"], "path": "price_rules/<price_rule_id>/discount_codes/<id>.json" }
];
//# sourceMappingURL=discount_code.js.map