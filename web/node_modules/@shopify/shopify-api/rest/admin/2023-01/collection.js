"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const image_1 = require("./image");
class Collection extends base_1.Base {
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
    static products(_a) {
        var { session, id, limit = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "id", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "products",
                session: session,
                urlIds: { "id": id },
                params: Object.assign({ "limit": limit }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
}
exports.Collection = Collection;
Collection.apiVersion = types_1.ApiVersion.January23;
Collection.resourceName = 'collection';
Collection.pluralName = 'collections';
Collection.hasOne = {
    "image": image_1.Image
};
Collection.hasMany = {};
Collection.paths = [
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "collections/<id>.json" },
    { "http_method": "get", "operation": "products", "ids": ["id"], "path": "collections/<id>/products.json" }
];
//# sourceMappingURL=collection.js.map