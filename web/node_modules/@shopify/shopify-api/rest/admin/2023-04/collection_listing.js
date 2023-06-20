"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionListing = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const image_1 = require("./image");
class CollectionListing extends base_1.Base {
    static find({ session, collection_id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "collection_id": collection_id },
                params: {},
            });
            return result.data ? result.data[0] : null;
        });
    }
    static delete({ session, collection_id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "collection_id": collection_id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, limit = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit }, otherArgs),
            });
            return response;
        });
    }
    static product_ids(_a) {
        var { session, collection_id, limit = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "collection_id", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "product_ids",
                session: session,
                urlIds: { "collection_id": collection_id },
                params: Object.assign({ "limit": limit }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.CollectionListing = CollectionListing;
CollectionListing.apiVersion = types_1.ApiVersion.April23;
CollectionListing.resourceName = 'collection_listing';
CollectionListing.pluralName = 'collection_listings';
CollectionListing.hasOne = {
    "image": image_1.Image
};
CollectionListing.hasMany = {};
CollectionListing.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["collection_id"], "path": "collection_listings/<collection_id>.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "collection_listings.json" },
    { "http_method": "get", "operation": "get", "ids": ["collection_id"], "path": "collection_listings/<collection_id>.json" },
    { "http_method": "get", "operation": "product_ids", "ids": ["collection_id"], "path": "collection_listings/<collection_id>/product_ids.json" },
    { "http_method": "put", "operation": "put", "ids": ["collection_id"], "path": "collection_listings/<collection_id>.json" }
];
CollectionListing.primaryKey = "collection_id";
//# sourceMappingURL=collection_listing.js.map