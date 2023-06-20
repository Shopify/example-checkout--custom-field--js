"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Currency extends base_1.Base {
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
exports.Currency = Currency;
Currency.apiVersion = types_1.ApiVersion.January23;
Currency.resourceName = 'currency';
Currency.pluralName = 'currencies';
Currency.hasOne = {};
Currency.hasMany = {};
Currency.paths = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "currencies.json" }
];
//# sourceMappingURL=currency.js.map