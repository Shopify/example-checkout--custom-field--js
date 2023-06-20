"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispute = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Dispute extends base_1.Base {
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
        var { session, since_id = null, last_id = null, status = null, initiated_at = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "last_id", "status", "initiated_at"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "since_id": since_id, "last_id": last_id, "status": status, "initiated_at": initiated_at }, otherArgs),
            });
            return response;
        });
    }
}
exports.Dispute = Dispute;
Dispute.apiVersion = types_1.ApiVersion.October22;
Dispute.resourceName = 'dispute';
Dispute.pluralName = 'disputes';
Dispute.hasOne = {};
Dispute.hasMany = {};
Dispute.paths = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "shopify_payments/disputes.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "shopify_payments/disputes/<id>.json" }
];
//# sourceMappingURL=dispute.js.map