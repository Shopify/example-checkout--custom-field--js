"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class Image extends base_1.Base {
    static find({ session, id, product_id = null, fields = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "product_id": product_id },
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
        var { session, product_id = null, since_id = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "product_id", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "product_id": product_id },
                params: Object.assign({ "since_id": since_id, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, product_id = null, since_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "product_id", "since_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: { "product_id": product_id },
                params: Object.assign({ "since_id": since_id }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Image = Image;
Image.apiVersion = types_1.ApiVersion.April23;
Image.resourceName = 'image';
Image.pluralName = 'images';
Image.hasOne = {};
Image.hasMany = {};
Image.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["product_id", "id"], "path": "products/<product_id>/images/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": ["product_id"], "path": "products/<product_id>/images/count.json" },
    { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "products/<product_id>/images.json" },
    { "http_method": "get", "operation": "get", "ids": ["product_id", "id"], "path": "products/<product_id>/images/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": ["product_id"], "path": "products/<product_id>/images.json" },
    { "http_method": "put", "operation": "put", "ids": ["product_id", "id"], "path": "products/<product_id>/images/<id>.json" }
];
//# sourceMappingURL=image.js.map