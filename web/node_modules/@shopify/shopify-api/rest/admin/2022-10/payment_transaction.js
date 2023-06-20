"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTransaction = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const currency_1 = require("./currency");
class PaymentTransaction extends base_1.Base {
    static transactions(_a) {
        var { session, since_id = null, last_id = null, test = null, payout_id = null, payout_status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "last_id", "test", "payout_id", "payout_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "transactions",
                session: session,
                urlIds: {},
                params: Object.assign({ "since_id": since_id, "last_id": last_id, "test": test, "payout_id": payout_id, "payout_status": payout_status }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.PaymentTransaction = PaymentTransaction;
PaymentTransaction.apiVersion = types_1.ApiVersion.October22;
PaymentTransaction.resourceName = 'payment_transaction';
PaymentTransaction.pluralName = 'payment_transactions';
PaymentTransaction.hasOne = {
    "currency": currency_1.Currency
};
PaymentTransaction.hasMany = {};
PaymentTransaction.paths = [
    { "http_method": "get", "operation": "transactions", "ids": [], "path": "shopify_payments/balance/transactions.json" }
];
//# sourceMappingURL=payment_transaction.js.map