"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metafield = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Metafield extends base_1.Base {
    static find({ session, id, article_id = null, blog_id = null, collection_id = null, customer_id = null, draft_order_id = null, order_id = null, page_id = null, product_image_id = null, product_id = null, variant_id = null, fields = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "article_id": article_id, "blog_id": blog_id, "collection_id": collection_id, "customer_id": customer_id, "draft_order_id": draft_order_id, "order_id": order_id, "page_id": page_id, "product_image_id": product_image_id, "product_id": product_id, "variant_id": variant_id },
                params: { "fields": fields },
            });
            return result.data ? result.data[0] : null;
        });
    }
    static delete({ session, id, article_id = null, blog_id = null, collection_id = null, customer_id = null, draft_order_id = null, order_id = null, page_id = null, product_image_id = null, product_id = null, variant_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "id": id, "article_id": article_id, "blog_id": blog_id, "collection_id": collection_id, "customer_id": customer_id, "draft_order_id": draft_order_id, "order_id": order_id, "page_id": page_id, "product_image_id": product_image_id, "product_id": product_id, "variant_id": variant_id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, article_id = null, blog_id = null, collection_id = null, customer_id = null, draft_order_id = null, order_id = null, page_id = null, product_image_id = null, product_id = null, variant_id = null, limit = null, since_id = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null, namespace = null, key = null, type = null, fields = null, metafield = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "article_id", "blog_id", "collection_id", "customer_id", "draft_order_id", "order_id", "page_id", "product_image_id", "product_id", "variant_id", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "namespace", "key", "type", "fields", "metafield"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "article_id": article_id, "blog_id": blog_id, "collection_id": collection_id, "customer_id": customer_id, "draft_order_id": draft_order_id, "order_id": order_id, "page_id": page_id, "product_image_id": product_image_id, "product_id": product_id, "variant_id": variant_id },
                params: Object.assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "namespace": namespace, "key": key, "type": type, "fields": fields, "metafield": metafield }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, article_id = null, blog_id = null, collection_id = null, customer_id = null, draft_order_id = null, order_id = null, page_id = null, product_image_id = null, product_id = null, variant_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "article_id", "blog_id", "collection_id", "customer_id", "draft_order_id", "order_id", "page_id", "product_image_id", "product_id", "variant_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: { "article_id": article_id, "blog_id": blog_id, "collection_id": collection_id, "customer_id": customer_id, "draft_order_id": draft_order_id, "order_id": order_id, "page_id": page_id, "product_image_id": product_image_id, "product_id": product_id, "variant_id": variant_id },
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Metafield = Metafield;
Metafield.apiVersion = types_1.ApiVersion.January23;
Metafield.resourceName = 'metafield';
Metafield.pluralName = 'metafields';
Metafield.hasOne = {};
Metafield.hasMany = {};
Metafield.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["article_id", "id"], "path": "articles/<article_id>/metafields/<id>.json" },
    { "http_method": "delete", "operation": "delete", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/metafields/<id>.json" },
    { "http_method": "delete", "operation": "delete", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/metafields/<id>.json" },
    { "http_method": "delete", "operation": "delete", "ids": ["collection_id", "id"], "path": "collections/<collection_id>/metafields/<id>.json" },
    { "http_method": "delete", "operation": "delete", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/metafields/<id>.json" },
    { "http_method": "delete", "operation": "delete", "ids": ["draft_order_id", "id"], "path": "draft_orders/<draft_order_id>/metafields/<id>.json" },
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "metafields/<id>.json" },
    { "http_method": "delete", "operation": "delete", "ids": ["order_id", "id"], "path": "orders/<order_id>/metafields/<id>.json" },
    { "http_method": "delete", "operation": "delete", "ids": ["page_id", "id"], "path": "pages/<page_id>/metafields/<id>.json" },
    { "http_method": "delete", "operation": "delete", "ids": ["product_image_id", "id"], "path": "product_images/<product_image_id>/metafields/<id>.json" },
    { "http_method": "delete", "operation": "delete", "ids": ["product_id", "id"], "path": "products/<product_id>/metafields/<id>.json" },
    { "http_method": "delete", "operation": "delete", "ids": ["variant_id", "id"], "path": "variants/<variant_id>/metafields/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": ["article_id"], "path": "articles/<article_id>/metafields/count.json" },
    { "http_method": "get", "operation": "count", "ids": ["blog_id"], "path": "blogs/<blog_id>/metafields/count.json" },
    { "http_method": "get", "operation": "count", "ids": ["blog_id"], "path": "blogs/<blog_id>/metafields/count.json" },
    { "http_method": "get", "operation": "count", "ids": ["collection_id"], "path": "collections/<collection_id>/metafields/count.json" },
    { "http_method": "get", "operation": "count", "ids": ["customer_id"], "path": "customers/<customer_id>/metafields/count.json" },
    { "http_method": "get", "operation": "count", "ids": ["draft_order_id"], "path": "draft_orders/<draft_order_id>/metafields/count.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "metafields/count.json" },
    { "http_method": "get", "operation": "count", "ids": ["order_id"], "path": "orders/<order_id>/metafields/count.json" },
    { "http_method": "get", "operation": "count", "ids": ["page_id"], "path": "pages/<page_id>/metafields/count.json" },
    { "http_method": "get", "operation": "count", "ids": ["product_image_id"], "path": "product_images/<product_image_id>/metafields/count.json" },
    { "http_method": "get", "operation": "count", "ids": ["product_id"], "path": "products/<product_id>/metafields/count.json" },
    { "http_method": "get", "operation": "count", "ids": ["variant_id"], "path": "variants/<variant_id>/metafields/count.json" },
    { "http_method": "get", "operation": "get", "ids": ["article_id"], "path": "articles/<article_id>/metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["article_id", "id"], "path": "articles/<article_id>/metafields/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["blog_id"], "path": "blogs/<blog_id>/metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["blog_id"], "path": "blogs/<blog_id>/metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/metafields/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/metafields/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["collection_id"], "path": "collections/<collection_id>/metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["collection_id", "id"], "path": "collections/<collection_id>/metafields/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["customer_id"], "path": "customers/<customer_id>/metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/metafields/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["draft_order_id"], "path": "draft_orders/<draft_order_id>/metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["draft_order_id", "id"], "path": "draft_orders/<draft_order_id>/metafields/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "metafields/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id", "id"], "path": "orders/<order_id>/metafields/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["page_id"], "path": "pages/<page_id>/metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["page_id", "id"], "path": "pages/<page_id>/metafields/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["product_image_id"], "path": "product_images/<product_image_id>/metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["product_image_id", "id"], "path": "product_images/<product_image_id>/metafields/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "products/<product_id>/metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["product_id", "id"], "path": "products/<product_id>/metafields/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["variant_id"], "path": "variants/<variant_id>/metafields.json" },
    { "http_method": "get", "operation": "get", "ids": ["variant_id", "id"], "path": "variants/<variant_id>/metafields/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": ["article_id"], "path": "articles/<article_id>/metafields.json" },
    { "http_method": "post", "operation": "post", "ids": ["blog_id"], "path": "blogs/<blog_id>/metafields.json" },
    { "http_method": "post", "operation": "post", "ids": ["blog_id"], "path": "blogs/<blog_id>/metafields.json" },
    { "http_method": "post", "operation": "post", "ids": ["collection_id"], "path": "collections/<collection_id>/metafields.json" },
    { "http_method": "post", "operation": "post", "ids": ["customer_id"], "path": "customers/<customer_id>/metafields.json" },
    { "http_method": "post", "operation": "post", "ids": ["draft_order_id"], "path": "draft_orders/<draft_order_id>/metafields.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "metafields.json" },
    { "http_method": "post", "operation": "post", "ids": ["order_id"], "path": "orders/<order_id>/metafields.json" },
    { "http_method": "post", "operation": "post", "ids": ["page_id"], "path": "pages/<page_id>/metafields.json" },
    { "http_method": "post", "operation": "post", "ids": ["product_image_id"], "path": "product_images/<product_image_id>/metafields.json" },
    { "http_method": "post", "operation": "post", "ids": ["product_id"], "path": "products/<product_id>/metafields.json" },
    { "http_method": "post", "operation": "post", "ids": ["variant_id"], "path": "variants/<variant_id>/metafields.json" },
    { "http_method": "put", "operation": "put", "ids": ["article_id", "id"], "path": "articles/<article_id>/metafields/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/metafields/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/metafields/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["collection_id", "id"], "path": "collections/<collection_id>/metafields/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/metafields/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["draft_order_id", "id"], "path": "draft_orders/<draft_order_id>/metafields/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "metafields/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["order_id", "id"], "path": "orders/<order_id>/metafields/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["page_id", "id"], "path": "pages/<page_id>/metafields/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["product_image_id", "id"], "path": "product_images/<product_image_id>/metafields/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["product_id", "id"], "path": "products/<product_id>/metafields/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["variant_id", "id"], "path": "variants/<variant_id>/metafields/<id>.json" }
];
//# sourceMappingURL=metafield.js.map