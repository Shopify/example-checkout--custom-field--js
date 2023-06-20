"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderTransaction = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class TenderTransaction extends base_1.Base {
    static all(_a) {
        var { session, limit = null, since_id = null, processed_at_min = null, processed_at_max = null, processed_at = null, order = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "processed_at_min", "processed_at_max", "processed_at", "order"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit, "since_id": since_id, "processed_at_min": processed_at_min, "processed_at_max": processed_at_max, "processed_at": processed_at, "order": order }, otherArgs),
            });
            return response;
        });
    }
}
exports.TenderTransaction = TenderTransaction;
TenderTransaction.apiVersion = types_1.ApiVersion.January23;
TenderTransaction.resourceName = 'tender_transaction';
TenderTransaction.pluralName = 'tender_transactions';
TenderTransaction.hasOne = {};
TenderTransaction.hasMany = {};
TenderTransaction.paths = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "tender_transactions.json" }
];
//# sourceMappingURL=tender_transaction.js.map