"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisputeFileUpload = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class DisputeFileUpload extends base_1.Base {
    static delete({ session, id, dispute_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "id": id, "dispute_id": dispute_id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
}
exports.DisputeFileUpload = DisputeFileUpload;
DisputeFileUpload.apiVersion = types_1.ApiVersion.July22;
DisputeFileUpload.resourceName = 'dispute_file_upload';
DisputeFileUpload.pluralName = 'dispute_file_uploads';
DisputeFileUpload.hasOne = {};
DisputeFileUpload.hasMany = {};
DisputeFileUpload.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["dispute_id", "id"], "path": "shopify_payments/disputes/<dispute_id>/dispute_file_uploads/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": ["dispute_id"], "path": "shopify_payments/disputes/<dispute_id>/dispute_file_uploads.json" }
];
//# sourceMappingURL=dispute_file_upload.js.map