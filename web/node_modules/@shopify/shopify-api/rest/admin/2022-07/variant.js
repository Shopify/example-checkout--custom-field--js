"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variant = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Variant extends base_1.Base {
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
    static delete({ session, id, product_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "id": id, "product_id": product_id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, product_id = null, limit = null, presentment_currencies = null, since_id = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "product_id", "limit", "presentment_currencies", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "product_id": product_id },
                params: Object.assign({ "limit": limit, "presentment_currencies": presentment_currencies, "since_id": since_id, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, product_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "product_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: { "product_id": product_id },
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Variant = Variant;
Variant.apiVersion = types_1.ApiVersion.July22;
Variant.resourceName = 'variant';
Variant.pluralName = 'variants';
Variant.hasOne = {};
Variant.hasMany = {};
Variant.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["product_id", "id"], "path": "products/<product_id>/variants/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": ["product_id"], "path": "products/<product_id>/variants/count.json" },
    { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "products/<product_id>/variants.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "variants/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": ["product_id"], "path": "products/<product_id>/variants.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "variants/<id>.json" }
];
Variant.readOnlyAttributes = [
    "inventory_quantity",
    "inventory_quantity_adjustment"
];
//# sourceMappingURL=variant.js.map