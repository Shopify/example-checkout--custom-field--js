"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConfig = void 0;
const tslib_1 = require("tslib");
const error_1 = require("./error");
const types_1 = require("./types");
const scopes_1 = require("./auth/scopes");
function validateConfig(params) {
    const config = {
        apiKey: '',
        apiSecretKey: '',
        scopes: new scopes_1.AuthScopes([]),
        hostName: '',
        hostScheme: 'https',
        apiVersion: types_1.LATEST_API_VERSION,
        isEmbeddedApp: true,
        isCustomStoreApp: false,
        logger: {
            log: defaultLogFunction,
            level: types_1.LogSeverity.Info,
            httpRequests: false,
            timestamps: false,
        },
    };
    // Make sure that the essential params actually have content in them
    const mandatory = [
        'apiKey',
        'apiSecretKey',
        'hostName',
    ];
    if (!('isCustomStoreApp' in params) || !params.isCustomStoreApp) {
        mandatory.push('scopes');
    }
    const missing = [];
    mandatory.forEach((key) => {
        if (!notEmpty(params[key])) {
            missing.push(key);
        }
    });
    if (missing.length) {
        throw new error_1.ShopifyError(`Cannot initialize Shopify API Library. Missing values for: ${missing.join(', ')}`);
    }
    const { hostScheme, isCustomStoreApp, userAgentPrefix, logger, privateAppStorefrontAccessToken, customShopDomains, billing } = params, mandatoryParams = tslib_1.__rest(params, ["hostScheme", "isCustomStoreApp", "userAgentPrefix", "logger", "privateAppStorefrontAccessToken", "customShopDomains", "billing"]);
    Object.assign(config, mandatoryParams, {
        hostName: params.hostName.replace(/\/$/, ''),
        scopes: params.scopes instanceof scopes_1.AuthScopes
            ? params.scopes
            : new scopes_1.AuthScopes(params.scopes),
        hostScheme: hostScheme !== null && hostScheme !== void 0 ? hostScheme : config.hostScheme,
        isCustomStoreApp: isCustomStoreApp === undefined
            ? config.isCustomStoreApp
            : isCustomStoreApp,
        userAgentPrefix: userAgentPrefix !== null && userAgentPrefix !== void 0 ? userAgentPrefix : config.userAgentPrefix,
        logger: Object.assign(Object.assign({}, config.logger), (logger || {})),
        privateAppStorefrontAccessToken: privateAppStorefrontAccessToken !== null && privateAppStorefrontAccessToken !== void 0 ? privateAppStorefrontAccessToken : config.privateAppStorefrontAccessToken,
        customShopDomains: customShopDomains !== null && customShopDomains !== void 0 ? customShopDomains : config.customShopDomains,
        billing: billing !== null && billing !== void 0 ? billing : config.billing,
    });
    return config;
}
exports.validateConfig = validateConfig;
function notEmpty(value) {
    if (value == null) {
        return false;
    }
    return typeof value === 'string' || Array.isArray(value)
        ? value.length > 0
        : true;
}
function defaultLogFunction(severity, message) {
    switch (severity) {
        case types_1.LogSeverity.Debug:
            console.debug(message);
            break;
        case types_1.LogSeverity.Info:
            console.log(message);
            break;
        case types_1.LogSeverity.Warning:
            console.warn(message);
            break;
        case types_1.LogSeverity.Error:
            console.error(message);
            break;
    }
}
//# sourceMappingURL=config.js.map