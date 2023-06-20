"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListing = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const image_1 = require("./image");
const variant_1 = require("./variant");
class ProductListing extends base_1.Base {
    static find({ session, product_id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "product_id": product_id },
                params: {},
            });
            return result.data ? result.data[0] : null;
        });
    }
    static delete({ session, product_id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "product_id": product_id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, product_ids = null, limit = null, collection_id = null, updated_at_min = null, handle = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "product_ids", "limit", "collection_id", "updated_at_min", "handle"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "product_ids": product_ids, "limit": limit, "collection_id": collection_id, "updated_at_min": updated_at_min, "handle": handle }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session } = _a, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    static product_ids(_a) {
        var { session, limit = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "product_ids",
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.ProductListing = ProductListing;
ProductListing.apiVersion = types_1.ApiVersion.April23;
ProductListing.resourceName = 'product_listing';
ProductListing.pluralName = 'product_listings';
ProductListing.hasOne = {};
ProductListing.hasMany = {
    "images": image_1.Image,
    "variants": variant_1.Variant
};
ProductListing.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["product_id"], "path": "product_listings/<product_id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "product_listings/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "product_listings.json" },
    { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "product_listings/<product_id>.json" },
    { "http_method": "get", "operation": "product_ids", "ids": [], "path": "product_listings/product_ids.json" },
    { "http_method": "put", "operation": "put", "ids": ["product_id"], "path": "product_listings/<product_id>.json" }
];
ProductListing.primaryKey = "product_id";
//# sourceMappingURL=product_listing.js.map