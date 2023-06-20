"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const image_1 = require("./image");
const variant_1 = require("./variant");
class Product extends base_1.Base {
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
        var { session, ids = null, limit = null, since_id = null, title = null, vendor = null, handle = null, product_type = null, status = null, collection_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, published_at_min = null, published_at_max = null, published_status = null, fields = null, presentment_currencies = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "ids", "limit", "since_id", "title", "vendor", "handle", "product_type", "status", "collection_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status", "fields", "presentment_currencies"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "ids": ids, "limit": limit, "since_id": since_id, "title": title, "vendor": vendor, "handle": handle, "product_type": product_type, "status": status, "collection_id": collection_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status, "fields": fields, "presentment_currencies": presentment_currencies }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, vendor = null, product_type = null, collection_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, published_at_min = null, published_at_max = null, published_status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "vendor", "product_type", "collection_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "vendor": vendor, "product_type": product_type, "collection_id": collection_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Product = Product;
Product.apiVersion = types_1.ApiVersion.October22;
Product.resourceName = 'product';
Product.pluralName = 'products';
Product.hasOne = {};
Product.hasMany = {
    "images": image_1.Image,
    "variants": variant_1.Variant
};
Product.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "products/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "products/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "products.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "products/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "products.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "products/<id>.json" }
];
//# sourceMappingURL=product.js.map