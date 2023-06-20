"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCharge = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const currency_1 = require("./currency");
class ApplicationCharge extends base_1.Base {
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
    static all(_a) {
        var { session, since_id = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "since_id": since_id, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
}
exports.ApplicationCharge = ApplicationCharge;
ApplicationCharge.apiVersion = types_1.ApiVersion.July22;
ApplicationCharge.resourceName = 'application_charge';
ApplicationCharge.pluralName = 'application_charges';
ApplicationCharge.hasOne = {
    "currency": currency_1.Currency
};
ApplicationCharge.hasMany = {};
ApplicationCharge.paths = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "application_charges.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "application_charges/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "application_charges.json" }
];
//# sourceMappingURL=application_charge.js.map