"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopifyApp = void 0;
var tslib_1 = require("tslib");
var semver_1 = tslib_1.__importDefault(require("semver"));
require("@shopify/shopify-api/adapters/node");
var shopify_api_1 = require("@shopify/shopify-api");
var shopify_app_session_storage_memory_1 = require("@shopify/shopify-app-session-storage-memory");
var version_1 = require("./version");
var index_1 = require("./middlewares/index");
var index_2 = require("./auth/index");
var index_3 = require("./webhooks/index");
var redirect_out_of_app_1 = require("./redirect-out-of-app");
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./auth/types"), exports);
tslib_1.__exportStar(require("./middlewares/types"), exports);
tslib_1.__exportStar(require("./webhooks/types"), exports);
function shopifyApp(config) {
    var apiConfig = config.api, appConfig = tslib_1.__rest(config, ["api"]);
    var api = (0, shopify_api_1.shopifyApi)(apiConfigWithDefaults(apiConfig !== null && apiConfig !== void 0 ? apiConfig : {}));
    var validatedConfig = validateAppConfig(appConfig, api);
    return {
        config: validatedConfig,
        api: api,
        auth: (0, index_2.auth)({ api: api, config: validatedConfig }),
        processWebhooks: (0, index_3.processWebhooks)({ api: api, config: validatedConfig }),
        validateAuthenticatedSession: (0, index_1.validateAuthenticatedSession)({
            api: api,
            config: validatedConfig,
        }),
        cspHeaders: (0, index_1.cspHeaders)({ api: api }),
        ensureInstalledOnShop: (0, index_1.ensureInstalled)({
            api: api,
            config: validatedConfig,
        }),
        redirectToShopifyOrAppRoot: (0, index_1.redirectToShopifyOrAppRoot)({
            api: api,
            config: validatedConfig,
        }),
        redirectOutOfApp: (0, redirect_out_of_app_1.redirectOutOfApp)({ config: validatedConfig }),
    };
}
exports.shopifyApp = shopifyApp;
function apiConfigWithDefaults(apiConfig) {
    var _a, _b, _c;
    var userAgent = "Shopify Express Library v".concat(version_1.SHOPIFY_EXPRESS_LIBRARY_VERSION);
    if (apiConfig.userAgentPrefix) {
        userAgent = "".concat(apiConfig.userAgentPrefix, " | ").concat(userAgent);
    }
    /* eslint-disable no-process-env */
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ apiKey: process.env.SHOPIFY_API_KEY, apiSecretKey: process.env.SHOPIFY_API_SECRET, scopes: (_a = process.env.SCOPES) === null || _a === void 0 ? void 0 : _a.split(','), hostScheme: (_b = process.env.HOST) === null || _b === void 0 ? void 0 : _b.split('://')[0], hostName: (_c = process.env.HOST) === null || _c === void 0 ? void 0 : _c.replace(/https?:\/\//, ''), isEmbeddedApp: true, apiVersion: shopify_api_1.LATEST_API_VERSION }, (process.env.SHOP_CUSTOM_DOMAIN && {
        customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN],
    })), apiConfig), { userAgentPrefix: userAgent });
    /* eslint-enable no-process-env */
}
function validateAppConfig(config, api) {
    var sessionStorage = config.sessionStorage, configWithoutSessionStorage = tslib_1.__rest(config, ["sessionStorage"]);
    return tslib_1.__assign(tslib_1.__assign({ 
        // We override the API package's logger to add the right package context by default (and make the call simpler)
        logger: overrideLoggerPackage(api.logger), useOnlineTokens: false, exitIframePath: '/exitiframe', sessionStorage: sessionStorage !== null && sessionStorage !== void 0 ? sessionStorage : new shopify_app_session_storage_memory_1.MemorySessionStorage() }, configWithoutSessionStorage), { auth: config.auth, webhooks: config.webhooks });
}
function overrideLoggerPackage(logger) {
    var baseContext = { package: 'shopify-app' };
    var warningFunction = function (message, context) {
        if (context === void 0) { context = {}; }
        return logger.warning(message, tslib_1.__assign(tslib_1.__assign({}, baseContext), context));
    };
    return tslib_1.__assign(tslib_1.__assign({}, logger), { log: function (severity, message, context) {
            if (context === void 0) { context = {}; }
            return logger.log(severity, message, tslib_1.__assign(tslib_1.__assign({}, baseContext), context));
        }, debug: function (message, context) {
            if (context === void 0) { context = {}; }
            return logger.debug(message, tslib_1.__assign(tslib_1.__assign({}, baseContext), context));
        }, info: function (message, context) {
            if (context === void 0) { context = {}; }
            return logger.info(message, tslib_1.__assign(tslib_1.__assign({}, baseContext), context));
        }, warning: warningFunction, error: function (message, context) {
            if (context === void 0) { context = {}; }
            return logger.error(message, tslib_1.__assign(tslib_1.__assign({}, baseContext), context));
        }, deprecated: deprecated(warningFunction) });
}
function deprecated(warningFunction) {
    return function (version, message) {
        if (semver_1.default.gte(version_1.SHOPIFY_EXPRESS_LIBRARY_VERSION, version)) {
            throw new shopify_api_1.FeatureDeprecatedError("Feature was deprecated in version ".concat(version));
        }
        return warningFunction("[Deprecated | ".concat(version, "] ").concat(message));
    };
}
//# sourceMappingURL=index.js.map