"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftCardAdjustment = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class GiftCardAdjustment extends base_1.Base {
    static getJsonBodyName() {
        return "adjustment";
    }
    static find({ session, id, gift_card_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "gift_card_id": gift_card_id },
                params: {},
            });
            return result.data ? result.data[0] : null;
        });
    }
    static all(_a) {
        var { session, gift_card_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "gift_card_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "gift_card_id": gift_card_id },
                params: Object.assign({}, otherArgs),
            });
            return response;
        });
    }
}
exports.GiftCardAdjustment = GiftCardAdjustment;
GiftCardAdjustment.apiVersion = types_1.ApiVersion.April23;
GiftCardAdjustment.resourceName = 'gift_card_adjustment';
GiftCardAdjustment.pluralName = 'gift_card_adjustments';
GiftCardAdjustment.hasOne = {};
GiftCardAdjustment.hasMany = {};
GiftCardAdjustment.paths = [
    { "http_method": "get", "operation": "get", "ids": ["gift_card_id"], "path": "gift_cards/<gift_card_id>/adjustments.json" },
    { "http_method": "get", "operation": "get", "ids": ["gift_card_id", "id"], "path": "gift_cards/<gift_card_id>/adjustments/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": ["gift_card_id"], "path": "gift_cards/<gift_card_id>/adjustments.json" }
];
//# sourceMappingURL=gift_card_adjustment.js.map