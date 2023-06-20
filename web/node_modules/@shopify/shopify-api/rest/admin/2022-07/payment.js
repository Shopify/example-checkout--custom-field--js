"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const transaction_1 = require("./transaction");
const checkout_1 = require("./checkout");
class Payment extends base_1.Base {
    static find({ session, id, checkout_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "checkout_id": checkout_id },
                params: {},
            });
            return result.data ? result.data[0] : null;
        });
    }
    static all(_a) {
        var { session, checkout_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "checkout_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "checkout_id": checkout_id },
                params: Object.assign({}, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, checkout_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "checkout_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: { "checkout_id": checkout_id },
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Payment = Payment;
Payment.apiVersion = types_1.ApiVersion.July22;
Payment.resourceName = 'payment';
Payment.pluralName = 'payments';
Payment.hasOne = {
    "transaction": transaction_1.Transaction,
    "checkout": checkout_1.Checkout
};
Payment.hasMany = {};
Payment.paths = [
    { "http_method": "get", "operation": "count", "ids": ["checkout_id"], "path": "checkouts/<checkout_id>/payments/count.json" },
    { "http_method": "get", "operation": "get", "ids": ["checkout_id"], "path": "checkouts/<checkout_id>/payments.json" },
    { "http_method": "get", "operation": "get", "ids": ["checkout_id", "id"], "path": "checkouts/<checkout_id>/payments/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": ["checkout_id"], "path": "checkouts/<checkout_id>/payments.json" }
];
//# sourceMappingURL=payment.js.map