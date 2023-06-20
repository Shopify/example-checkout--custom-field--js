"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAddress = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class CustomerAddress extends base_1.Base {
    static getJsonBodyName() {
        return "address";
    }
    static find({ session, id, customer_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "customer_id": customer_id },
                params: {},
            });
            return result.data ? result.data[0] : null;
        });
    }
    static delete({ session, id, customer_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "id": id, "customer_id": customer_id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, customer_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "customer_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "customer_id": customer_id },
                params: Object.assign({}, otherArgs),
            });
            return response;
        });
    }
    default(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "put",
                operation: "default",
                session: this.session,
                urlIds: { "id": this.id, "customer_id": this.customer_id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    set(_a) {
        var { address_ids = null, operation = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["address_ids", "operation", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "put",
                operation: "set",
                session: this.session,
                urlIds: { "customer_id": this.customer_id },
                params: Object.assign({ "address_ids": address_ids, "operation": operation }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.CustomerAddress = CustomerAddress;
CustomerAddress.apiVersion = types_1.ApiVersion.October22;
CustomerAddress.resourceName = 'customer_address';
CustomerAddress.pluralName = 'customer_addresses';
CustomerAddress.hasOne = {};
CustomerAddress.hasMany = {};
CustomerAddress.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/addresses/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["customer_id"], "path": "customers/<customer_id>/addresses.json" },
    { "http_method": "get", "operation": "get", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/addresses/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": ["customer_id"], "path": "customers/<customer_id>/addresses.json" },
    { "http_method": "put", "operation": "default", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/addresses/<id>/default.json" },
    { "http_method": "put", "operation": "put", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/addresses/<id>.json" },
    { "http_method": "put", "operation": "set", "ids": ["customer_id"], "path": "customers/<customer_id>/addresses/set.json" }
];
//# sourceMappingURL=customer_address.js.map