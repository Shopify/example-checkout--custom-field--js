"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentService = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class FulfillmentService extends base_1.Base {
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
    static all(_a) {
        var { session, scope = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "scope"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "scope": scope }, otherArgs),
            });
            return response;
        });
    }
}
exports.FulfillmentService = FulfillmentService;
FulfillmentService.apiVersion = types_1.ApiVersion.April23;
FulfillmentService.resourceName = 'fulfillment_service';
FulfillmentService.pluralName = 'fulfillment_services';
FulfillmentService.hasOne = {};
FulfillmentService.hasMany = {};
FulfillmentService.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "fulfillment_services/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "fulfillment_services.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "fulfillment_services/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "fulfillment_services.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "fulfillment_services/<id>.json" }
];
//# sourceMappingURL=fulfillment_service.js.map