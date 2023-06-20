"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftCard = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class GiftCard extends base_1.Base {
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
        var { session, status = null, limit = null, since_id = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "status", "limit", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "status": status, "limit": limit, "since_id": since_id, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session, status = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({ "status": status }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    static search(_a) {
        var { session, order = null, query = null, limit = null, fields = null, created_at_min = null, created_at_max = null, updated_at_min = null, updated_at_max = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "order", "query", "limit", "fields", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "search",
                session: session,
                urlIds: {},
                params: Object.assign({ "order": order, "query": query, "limit": limit, "fields": fields, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max }, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    disable(_a) {
        var { body = null } = _a, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "disable",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({}, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.GiftCard = GiftCard;
GiftCard.apiVersion = types_1.ApiVersion.October22;
GiftCard.resourceName = 'gift_card';
GiftCard.pluralName = 'gift_cards';
GiftCard.hasOne = {};
GiftCard.hasMany = {};
GiftCard.paths = [
    { "http_method": "get", "operation": "count", "ids": [], "path": "gift_cards/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "gift_cards.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "gift_cards/<id>.json" },
    { "http_method": "get", "operation": "search", "ids": [], "path": "gift_cards/search.json" },
    { "http_method": "post", "operation": "disable", "ids": ["id"], "path": "gift_cards/<id>/disable.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "gift_cards.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "gift_cards/<id>.json" }
];
//# sourceMappingURL=gift_card.js.map