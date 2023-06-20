"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookOperation = exports.DeliveryMethod = void 0;
var DeliveryMethod;
(function (DeliveryMethod) {
    DeliveryMethod["Http"] = "http";
    DeliveryMethod["EventBridge"] = "eventbridge";
    DeliveryMethod["PubSub"] = "pubsub";
})(DeliveryMethod = exports.DeliveryMethod || (exports.DeliveryMethod = {}));
var WebhookOperation;
(function (WebhookOperation) {
    WebhookOperation["Create"] = "create";
    WebhookOperation["Update"] = "update";
    WebhookOperation["Delete"] = "delete";
})(WebhookOperation = exports.WebhookOperation || (exports.WebhookOperation = {}));
//# sourceMappingURL=types.js.map