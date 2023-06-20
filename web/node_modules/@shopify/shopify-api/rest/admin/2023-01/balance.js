"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Balance extends base_1.Base {
    static all(_a) {
        var { session } = _a, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({}, otherArgs),
            });
            return response;
        });
    }
}
exports.Balance = Balance;
Balance.apiVersion = types_1.ApiVersion.January23;
Balance.resourceName = 'balance';
Balance.pluralName = 'balances';
Balance.hasOne = {};
Balance.hasMany = {};
Balance.paths = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "shopify_payments/balance.json" }
];
//# sourceMappingURL=balance.js.map