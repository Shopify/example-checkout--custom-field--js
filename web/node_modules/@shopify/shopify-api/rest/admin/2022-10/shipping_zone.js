"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingZone = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const country_1 = require("./country");
const province_1 = require("./province");
class ShippingZone extends base_1.Base {
    static all(_a) {
        var { session, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "fields": fields }, otherArgs),
            });
            return response;
        });
    }
}
exports.ShippingZone = ShippingZone;
ShippingZone.apiVersion = types_1.ApiVersion.October22;
ShippingZone.resourceName = 'shipping_zone';
ShippingZone.pluralName = 'shipping_zones';
ShippingZone.hasOne = {};
ShippingZone.hasMany = {
    "countries": country_1.Country,
    "provinces": province_1.Province
};
ShippingZone.paths = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "shipping_zones.json" }
];
//# sourceMappingURL=shipping_zone.js.map