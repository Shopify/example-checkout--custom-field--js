"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSavedSearch = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class CustomerSavedSearch extends base_1.Base {
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
        var { session, limit = null, since_id = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit, "since_id": since_id, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, since_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "since_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "since_id": since_id }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    static customers(_a) {
        var { session, id, order = null, limit = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "id", "order", "limit", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "customers",
                session: session,
                urlIds: { "id": id },
                params: Object.assign({ "order": order, "limit": limit, "fields": fields }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.CustomerSavedSearch = CustomerSavedSearch;
CustomerSavedSearch.apiVersion = types_1.ApiVersion.July22;
CustomerSavedSearch.resourceName = 'customer_saved_search';
CustomerSavedSearch.pluralName = 'customer_saved_searches';
CustomerSavedSearch.hasOne = {};
CustomerSavedSearch.hasMany = {};
CustomerSavedSearch.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "customer_saved_searches/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "customer_saved_searches/count.json" },
    { "http_method": "get", "operation": "customers", "ids": ["id"], "path": "customer_saved_searches/<id>/customers.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "customer_saved_searches.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "customer_saved_searches/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "customer_saved_searches.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "customer_saved_searches/<id>.json" }
];
//# sourceMappingURL=customer_saved_search.js.map