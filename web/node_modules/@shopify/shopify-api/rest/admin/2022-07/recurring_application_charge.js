"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurringApplicationCharge = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const currency_1 = require("./currency");
class RecurringApplicationCharge extends base_1.Base {
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
    customize(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "put",
                operation: "customize",
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
exports.RecurringApplicationCharge = RecurringApplicationCharge;
RecurringApplicationCharge.apiVersion = types_1.ApiVersion.July22;
RecurringApplicationCharge.resourceName = 'recurring_application_charge';
RecurringApplicationCharge.pluralName = 'recurring_application_charges';
RecurringApplicationCharge.hasOne = {
    "currency": currency_1.Currency
};
RecurringApplicationCharge.hasMany = {};
RecurringApplicationCharge.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "recurring_application_charges/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "recurring_application_charges.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "recurring_application_charges/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "recurring_application_charges.json" },
    { "http_method": "put", "operation": "customize", "ids": ["id"], "path": "recurring_application_charges/<id>/customize.json" }
];
//# sourceMappingURL=recurring_application_charge.js.map