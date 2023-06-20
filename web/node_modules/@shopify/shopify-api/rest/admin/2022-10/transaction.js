"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Transaction extends base_1.Base {
    static find({ session, id, order_id = null, fields = null, in_shop_currency = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "order_id": order_id },
                params: { "fields": fields, "in_shop_currency": in_shop_currency },
            });
            return result.data ? result.data[0] : null;
        });
    }
    static all(_a) {
        var { session, order_id = null, since_id = null, fields = null, in_shop_currency = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "order_id", "since_id", "fields", "in_shop_currency"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "order_id": order_id },
                params: Object.assign({ "since_id": since_id, "fields": fields, "in_shop_currency": in_shop_currency }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, order_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "order_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: { "order_id": order_id },
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Transaction = Transaction;
Transaction.apiVersion = types_1.ApiVersion.October22;
Transaction.resourceName = 'transaction';
Transaction.pluralName = 'transactions';
Transaction.hasOne = {};
Transaction.hasMany = {};
Transaction.paths = [
    { "http_method": "get", "operation": "count", "ids": ["order_id"], "path": "orders/<order_id>/transactions/count.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/transactions.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id", "id"], "path": "orders/<order_id>/transactions/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": ["order_id"], "path": "orders/<order_id>/transactions.json" }
];
//# sourceMappingURL=transaction.js.map