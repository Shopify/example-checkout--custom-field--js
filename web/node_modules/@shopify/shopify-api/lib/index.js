"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopifyApi = exports.Shopify = void 0;
const tslib_1 = require("tslib");
const load_rest_resources_1 = require("../rest/load-rest-resources");
const platform_1 = require("../runtime/platform");
const config_1 = require("./config");
const clients_1 = require("./clients");
const auth_1 = require("./auth");
const session_1 = require("./session");
const utils_1 = require("./utils");
const webhooks_1 = require("./webhooks");
const billing_1 = require("./billing");
const logger_1 = require("./logger");
const version_1 = require("./version");
tslib_1.__exportStar(require("./error"), exports);
tslib_1.__exportStar(require("./session/classes"), exports);
tslib_1.__exportStar(require("../rest/types"), exports);
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./base-types"), exports);
tslib_1.__exportStar(require("./auth/types"), exports);
tslib_1.__exportStar(require("./clients/types"), exports);
tslib_1.__exportStar(require("./session/types"), exports);
tslib_1.__exportStar(require("./webhooks/types"), exports);
// Temporarily export the deprecated v5 types as a Shopify object (as opposed to the type above) to help folks find
// the migration guide.
exports.Shopify = {};
function shopifyApi(config) {
    const { restResources } = config, libConfig = tslib_1.__rest(config, ["restResources"]);
    const validatedConfig = (0, config_1.validateConfig)(libConfig);
    const shopify = {
        config: validatedConfig,
        clients: (0, clients_1.clientClasses)(validatedConfig),
        auth: (0, auth_1.shopifyAuth)(validatedConfig),
        session: (0, session_1.shopifySession)(validatedConfig),
        utils: (0, utils_1.shopifyUtils)(validatedConfig),
        webhooks: (0, webhooks_1.shopifyWebhooks)(validatedConfig),
        billing: (0, billing_1.shopifyBilling)(validatedConfig),
        logger: (0, logger_1.logger)(validatedConfig),
        rest: {},
    };
    if (restResources) {
        shopify.rest = (0, load_rest_resources_1.loadRestResources)({
            resources: restResources,
            config: validatedConfig,
            RestClient: shopify.clients.Rest,
        });
    }
    shopify.logger
        .info(`version ${version_1.SHOPIFY_API_LIBRARY_VERSION}, environment ${(0, platform_1.abstractRuntimeString)()}`)
        .catch((err) => console.log(err));
    return shopify;
}
exports.shopifyApi = shopifyApi;
//# sourceMappingURL=index.js.map