"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplePayCertificate = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class ApplePayCertificate extends base_1.Base {
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
    static csr(_a) {
        var { session, id } = _a, otherArgs = tslib_1.__rest(_a, ["session", "id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "csr",
                session: session,
                urlIds: { "id": id },
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.ApplePayCertificate = ApplePayCertificate;
ApplePayCertificate.apiVersion = types_1.ApiVersion.October22;
ApplePayCertificate.resourceName = 'apple_pay_certificate';
ApplePayCertificate.pluralName = 'apple_pay_certificates';
ApplePayCertificate.hasOne = {};
ApplePayCertificate.hasMany = {};
ApplePayCertificate.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "apple_pay_certificates/<id>.json" },
    { "http_method": "get", "operation": "csr", "ids": ["id"], "path": "apple_pay_certificates/<id>/csr.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "apple_pay_certificates/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "apple_pay_certificates.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "apple_pay_certificates/<id>.json" }
];
//# sourceMappingURL=apple_pay_certificate.js.map