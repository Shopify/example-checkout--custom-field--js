"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrierService = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class CarrierService extends base_1.Base {
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
        var { session } = _a, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({}, otherArgs),
            });
            return response;
        });
    }
}
exports.CarrierService = CarrierService;
CarrierService.apiVersion = types_1.ApiVersion.January23;
CarrierService.resourceName = 'carrier_service';
CarrierService.pluralName = 'carrier_services';
CarrierService.hasOne = {};
CarrierService.hasMany = {};
CarrierService.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "carrier_services/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "carrier_services.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "carrier_services/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "carrier_services.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "carrier_services/<id>.json" }
];
//# sourceMappingURL=carrier_service.js.map