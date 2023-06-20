"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResourceFeedback = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class ProductResourceFeedback extends base_1.Base {
    static getJsonBodyName() {
        return "resource_feedback";
    }
    static all(_a) {
        var { session, product_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "product_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "product_id": product_id },
                params: Object.assign({}, otherArgs),
            });
            return response;
        });
    }
}
exports.ProductResourceFeedback = ProductResourceFeedback;
ProductResourceFeedback.apiVersion = types_1.ApiVersion.July22;
ProductResourceFeedback.resourceName = 'product_resource_feedback';
ProductResourceFeedback.pluralName = 'product_resource_feedbacks';
ProductResourceFeedback.hasOne = {};
ProductResourceFeedback.hasMany = {};
ProductResourceFeedback.paths = [
    { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "products/<product_id>/resource_feedback.json" },
    { "http_method": "post", "operation": "post", "ids": ["product_id"], "path": "products/<product_id>/resource_feedback.json" }
];
//# sourceMappingURL=product_resource_feedback.js.map