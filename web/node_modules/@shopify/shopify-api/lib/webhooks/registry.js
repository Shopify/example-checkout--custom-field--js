"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHostToCallbackUrl = exports.handlerIdentifier = exports.getHandlers = exports.getTopicsAdded = exports.addHandlers = exports.topicForStorage = exports.registry = void 0;
const error_1 = require("../error");
const logger_1 = require("../logger");
const types_1 = require("./types");
function registry() {
    return {};
}
exports.registry = registry;
function topicForStorage(topic) {
    return topic.toUpperCase().replace(/\//g, '_');
}
exports.topicForStorage = topicForStorage;
function addHandlers(config, webhookRegistry) {
    return function addHandlers(handlersToAdd) {
        for (const [topic, handlers] of Object.entries(handlersToAdd)) {
            const topicKey = topicForStorage(topic);
            if (Array.isArray(handlers)) {
                for (const handler of handlers) {
                    mergeOrAddHandler(config, webhookRegistry, topicKey, handler);
                }
            }
            else {
                mergeOrAddHandler(config, webhookRegistry, topicKey, handlers);
            }
        }
    };
}
exports.addHandlers = addHandlers;
function getTopicsAdded(webhookRegistry) {
    return function getTopicsAdded() {
        return Object.keys(webhookRegistry);
    };
}
exports.getTopicsAdded = getTopicsAdded;
function getHandlers(webhookRegistry) {
    return function getHandlers(topic) {
        return webhookRegistry[topicForStorage(topic)] || [];
    };
}
exports.getHandlers = getHandlers;
function handlerIdentifier(config, handler) {
    const prefix = handler.deliveryMethod;
    switch (handler.deliveryMethod) {
        case types_1.DeliveryMethod.Http:
            return `${prefix}_${addHostToCallbackUrl(config, handler.callbackUrl)}`;
        case types_1.DeliveryMethod.EventBridge:
            return `${prefix}_${handler.arn}`;
        case types_1.DeliveryMethod.PubSub:
            return `${prefix}_${handler.pubSubProject}:${handler.pubSubTopic}`;
        default:
            throw new error_1.InvalidDeliveryMethodError(`Unrecognized delivery method '${handler.deliveryMethod}'`);
    }
}
exports.handlerIdentifier = handlerIdentifier;
function addHostToCallbackUrl(config, callbackUrl) {
    if (callbackUrl.startsWith('/')) {
        return `${config.hostScheme}://${config.hostName}${callbackUrl}`;
    }
    else {
        return callbackUrl;
    }
}
exports.addHostToCallbackUrl = addHostToCallbackUrl;
function mergeOrAddHandler(config, webhookRegistry, topic, handler) {
    var _a, _b, _c;
    (_a = handler.includeFields) === null || _a === void 0 ? void 0 : _a.sort();
    (_b = handler.metafieldNamespaces) === null || _b === void 0 ? void 0 : _b.sort();
    if (handler.deliveryMethod === types_1.DeliveryMethod.Http) {
        (_c = handler.privateMetafieldNamespaces) === null || _c === void 0 ? void 0 : _c.sort();
    }
    if (!(topic in webhookRegistry)) {
        webhookRegistry[topic] = [handler];
        return;
    }
    const identifier = handlerIdentifier(config, handler);
    for (const index in webhookRegistry[topic]) {
        if (!Object.prototype.hasOwnProperty.call(webhookRegistry[topic], index)) {
            continue;
        }
        const existingHandler = webhookRegistry[topic][index];
        const existingIdentifier = handlerIdentifier(config, existingHandler);
        if (identifier !== existingIdentifier) {
            continue;
        }
        if (handler.deliveryMethod === types_1.DeliveryMethod.Http) {
            (0, logger_1.logger)(config).info(`Detected multiple handlers for '${topic}', webhooks.process will call them sequentially`);
            break;
        }
        else {
            throw new error_1.InvalidDeliveryMethodError(`Can only add multiple handlers when deliveryMethod is Http. Invalid handler: ${JSON.stringify(handler)}`);
        }
    }
    webhookRegistry[topic].push(handler);
}
//# sourceMappingURL=registry.js.map