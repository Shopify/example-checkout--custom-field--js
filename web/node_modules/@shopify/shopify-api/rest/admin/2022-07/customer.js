"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const metafield_1 = require("./metafield");
class Customer extends base_1.Base {
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
        var { session, ids = null, since_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, limit = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "ids", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "limit", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "ids": ids, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "limit": limit, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    static orders(_a) {
        var { session, id, status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "id", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "orders",
                session: session,
                urlIds: { "id": id },
                params: Object.assign({ "status": status }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    static search(_a) {
        var { session, order = null, query = null, limit = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "order", "query", "limit", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "search",
                session: session,
                urlIds: {},
                params: Object.assign({ "order": order, "query": query, "limit": limit, "fields": fields }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    account_activation_url(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "account_activation_url",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    send_invite(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "send_invite",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.Customer = Customer;
Customer.apiVersion = types_1.ApiVersion.July22;
Customer.resourceName = 'customer';
Customer.pluralName = 'customers';
Customer.hasOne = {
    "metafield": metafield_1.Metafield
};
Customer.hasMany = {};
Customer.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "customers/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "customers/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "customers.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "customers/<id>.json" },
    { "http_method": "get", "operation": "orders", "ids": ["id"], "path": "customers/<id>/orders.json" },
    { "http_method": "get", "operation": "search", "ids": [], "path": "customers/search.json" },
    { "http_method": "post", "operation": "account_activation_url", "ids": ["id"], "path": "customers/<id>/account_activation_url.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "customers.json" },
    { "http_method": "post", "operation": "send_invite", "ids": ["id"], "path": "customers/<id>/send_invite.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "customers/<id>.json" }
];
//# sourceMappingURL=customer.js.map