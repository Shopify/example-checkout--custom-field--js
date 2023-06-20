"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndroidPayKey = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class AndroidPayKey extends base_1.Base {
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
}
exports.AndroidPayKey = AndroidPayKey;
AndroidPayKey.apiVersion = types_1.ApiVersion.July22;
AndroidPayKey.resourceName = 'android_pay_key';
AndroidPayKey.pluralName = 'android_pay_keys';
AndroidPayKey.hasOne = {};
AndroidPayKey.hasMany = {};
AndroidPayKey.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "android_pay_keys/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "android_pay_keys/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "android_pay_keys.json" }
];
//# sourceMappingURL=android_pay_key.js.map