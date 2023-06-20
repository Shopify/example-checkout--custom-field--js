"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryLevel = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class InventoryLevel extends base_1.Base {
    static delete({ session, inventory_item_id = null, location_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: {},
                params: { "inventory_item_id": inventory_item_id, "location_id": location_id },
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, inventory_item_ids = null, location_ids = null, limit = null, updated_at_min = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "inventory_item_ids", "location_ids", "limit", "updated_at_min"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "inventory_item_ids": inventory_item_ids, "location_ids": location_ids, "limit": limit, "updated_at_min": updated_at_min }, otherArgs),
            });
            return response;
        });
    }
    adjust(_a) {
        var { inventory_item_id = null, location_id = null, available_adjustment = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["inventory_item_id", "location_id", "available_adjustment", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "adjust",
                session: this.session,
                urlIds: {},
                params: Object.assign({ "inventory_item_id": inventory_item_id, "location_id": location_id, "available_adjustment": available_adjustment }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    connect(_a) {
        var { inventory_item_id = null, location_id = null, relocate_if_necessary = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["inventory_item_id", "location_id", "relocate_if_necessary", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "connect",
                session: this.session,
                urlIds: {},
                params: Object.assign({ "inventory_item_id": inventory_item_id, "location_id": location_id, "relocate_if_necessary": relocate_if_necessary }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
    set(_a) {
        var { inventory_item_id = null, location_id = null, available = null, disconnect_if_necessary = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["inventory_item_id", "location_id", "available", "disconnect_if_necessary", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "set",
                session: this.session,
                urlIds: {},
                params: Object.assign({ "inventory_item_id": inventory_item_id, "location_id": location_id, "available": available, "disconnect_if_necessary": disconnect_if_necessary }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.InventoryLevel = InventoryLevel;
InventoryLevel.apiVersion = types_1.ApiVersion.April23;
InventoryLevel.resourceName = 'inventory_level';
InventoryLevel.pluralName = 'inventory_levels';
InventoryLevel.hasOne = {};
InventoryLevel.hasMany = {};
InventoryLevel.paths = [
    { "http_method": "delete", "operation": "delete", "ids": [], "path": "inventory_levels.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "inventory_levels.json" },
    { "http_method": "post", "operation": "adjust", "ids": [], "path": "inventory_levels/adjust.json" },
    { "http_method": "post", "operation": "connect", "ids": [], "path": "inventory_levels/connect.json" },
    { "http_method": "post", "operation": "set", "ids": [], "path": "inventory_levels/set.json" }
];
//# sourceMappingURL=inventory_level.js.map