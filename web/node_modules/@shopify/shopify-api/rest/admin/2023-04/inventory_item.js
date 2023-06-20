"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryItem = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class InventoryItem extends base_1.Base {
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
    static all(_a) {
        var { session, ids = null, limit = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "ids", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "ids": ids, "limit": limit }, otherArgs),
            });
            return response;
        });
    }
}
exports.InventoryItem = InventoryItem;
InventoryItem.apiVersion = types_1.ApiVersion.April23;
InventoryItem.resourceName = 'inventory_item';
InventoryItem.pluralName = 'inventory_items';
InventoryItem.hasOne = {};
InventoryItem.hasMany = {};
InventoryItem.paths = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "inventory_items.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "inventory_items/<id>.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "inventory_items/<id>.json" }
];
//# sourceMappingURL=inventory_item.js.map