"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payout = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Payout extends base_1.Base {
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
    static all(_a) {
        var { session, since_id = null, last_id = null, date_min = null, date_max = null, date = null, status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "last_id", "date_min", "date_max", "date", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "since_id": since_id, "last_id": last_id, "date_min": date_min, "date_max": date_max, "date": date, "status": status }, otherArgs),
            });
            return response;
        });
    }
}
exports.Payout = Payout;
Payout.apiVersion = types_1.ApiVersion.July22;
Payout.resourceName = 'payout';
Payout.pluralName = 'payouts';
Payout.hasOne = {};
Payout.hasMany = {};
Payout.paths = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "shopify_payments/payouts.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "shopify_payments/payouts/<id>.json" }
];
//# sourceMappingURL=payout.js.map