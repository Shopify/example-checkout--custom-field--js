"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopifyWebhooks = void 0;
const registry_1 = require("./registry");
const register_1 = require("./register");
const process_1 = require("./process");
function shopifyWebhooks(config) {
    const webhookRegistry = (0, registry_1.registry)();
    return {
        addHandlers: (0, registry_1.addHandlers)(config, webhookRegistry),
        getTopicsAdded: (0, registry_1.getTopicsAdded)(webhookRegistry),
        getHandlers: (0, registry_1.getHandlers)(webhookRegistry),
        register: (0, register_1.register)(config, webhookRegistry),
        process: (0, process_1.process)(config, webhookRegistry),
    };
}
exports.shopifyWebhooks = shopifyWebhooks;
//# sourceMappingURL=index.js.map