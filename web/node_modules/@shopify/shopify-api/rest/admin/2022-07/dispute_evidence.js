"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisputeEvidence = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const fulfillment_1 = require("./fulfillment");
class DisputeEvidence extends base_1.Base {
    static find({ session, dispute_id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "dispute_id": dispute_id },
                params: {},
            });
            return result.data ? result.data[0] : null;
        });
    }
}
exports.DisputeEvidence = DisputeEvidence;
DisputeEvidence.apiVersion = types_1.ApiVersion.July22;
DisputeEvidence.resourceName = 'dispute_evidence';
DisputeEvidence.pluralName = 'dispute_evidences';
DisputeEvidence.hasOne = {};
DisputeEvidence.hasMany = {
    "fulfillments": fulfillment_1.Fulfillment
};
DisputeEvidence.paths = [
    { "http_method": "get", "operation": "get", "ids": ["dispute_id"], "path": "shopify_payments/disputes/<dispute_id>/dispute_evidences.json" },
    { "http_method": "put", "operation": "put", "ids": ["dispute_id"], "path": "shopify_payments/disputes/<dispute_id>/dispute_evidences.json" }
];
DisputeEvidence.primaryKey = "dispute_id";
//# sourceMappingURL=dispute_evidence.js.map