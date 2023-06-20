"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingEvent = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class MarketingEvent extends base_1.Base {
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
        var { session, limit = null, offset = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "limit", "offset"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "limit": limit, "offset": offset }, otherArgs),
            });
            return response;
        });
    }
    static count(_a) {
        var { session } = _a, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "get",
                operation: "count",
                session: session,
                urlIds: {},
                params: Object.assign({}, otherArgs),
                body: {},
                entity: null,
            });
            return response ? response.body : null;
        });
    }
    engagements(_a) {
        var { occurred_on = null, impressions_count = null, views_count = null, clicks_count = null, shares_count = null, favorites_count = null, comments_count = null, ad_spend = null, is_cumulative = null, body = null } = _a, otherArgs = tslib_1.__rest(_a, ["occurred_on", "impressions_count", "views_count", "clicks_count", "shares_count", "favorites_count", "comments_count", "ad_spend", "is_cumulative", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "post",
                operation: "engagements",
                session: this.session,
                urlIds: { "id": this.id },
                params: Object.assign({ "occurred_on": occurred_on, "impressions_count": impressions_count, "views_count": views_count, "clicks_count": clicks_count, "shares_count": shares_count, "favorites_count": favorites_count, "comments_count": comments_count, "ad_spend": ad_spend, "is_cumulative": is_cumulative }, otherArgs),
                body: body,
                entity: this,
            });
            return response ? response.body : null;
        });
    }
}
exports.MarketingEvent = MarketingEvent;
MarketingEvent.apiVersion = types_1.ApiVersion.January23;
MarketingEvent.resourceName = 'marketing_event';
MarketingEvent.pluralName = 'marketing_events';
MarketingEvent.hasOne = {};
MarketingEvent.hasMany = {};
MarketingEvent.paths = [
    { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "marketing_events/<id>.json" },
    { "http_method": "get", "operation": "count", "ids": [], "path": "marketing_events/count.json" },
    { "http_method": "get", "operation": "get", "ids": [], "path": "marketing_events.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "marketing_events/<id>.json" },
    { "http_method": "post", "operation": "engagements", "ids": ["id"], "path": "marketing_events/<id>/engagements.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "marketing_events.json" },
    { "http_method": "put", "operation": "put", "ids": ["id"], "path": "marketing_events/<id>.json" }
];
//# sourceMappingURL=marketing_event.js.map