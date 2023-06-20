'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var semver = require('semver');
require('@shopify/shopify-api/adapters/node');
var shopifyApi = require('@shopify/shopify-api');
var shopifyAppSessionStorageMemory = require('@shopify/shopify-app-session-storage-memory');
var version = require('./version.js');
var validateAuthenticatedSession = require('./middlewares/validate-authenticated-session.js');
var ensureInstalledOnShop = require('./middlewares/ensure-installed-on-shop.js');
var cspHeaders = require('./middlewares/csp-headers.js');
var redirectToShopifyOrAppRoot = require('./middlewares/redirect-to-shopify-or-app-root.js');
var index = require('./auth/index.js');
var index$1 = require('./webhooks/index.js');
var redirectOutOfApp = require('./redirect-out-of-app.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var semver__default = /*#__PURE__*/_interopDefaultLegacy(semver);

function shopifyApp(config) {
  const {
    api: apiConfig,
    ...appConfig
  } = config;
  const api = shopifyApi.shopifyApi(apiConfigWithDefaults(apiConfig !== null && apiConfig !== void 0 ? apiConfig : {}));
  const validatedConfig = validateAppConfig(appConfig, api);
  return {
    config: validatedConfig,
    api,
    auth: index.auth({
      api,
      config: validatedConfig
    }),
    processWebhooks: index$1.processWebhooks({
      api,
      config: validatedConfig
    }),
    validateAuthenticatedSession: validateAuthenticatedSession.validateAuthenticatedSession({
      api,
      config: validatedConfig
    }),
    cspHeaders: cspHeaders.cspHeaders({
      api
    }),
    ensureInstalledOnShop: ensureInstalledOnShop.ensureInstalled({
      api,
      config: validatedConfig
    }),
    redirectToShopifyOrAppRoot: redirectToShopifyOrAppRoot.redirectToShopifyOrAppRoot({
      api,
      config: validatedConfig
    }),
    redirectOutOfApp: redirectOutOfApp.redirectOutOfApp({
      config: validatedConfig
    })
  };
}
function apiConfigWithDefaults(apiConfig) {
  var _process$env$SCOPES, _process$env$HOST, _process$env$HOST2;
  let userAgent = `Shopify Express Library v${version.SHOPIFY_EXPRESS_LIBRARY_VERSION}`;
  if (apiConfig.userAgentPrefix) {
    userAgent = `${apiConfig.userAgentPrefix} | ${userAgent}`;
  }

  /* eslint-disable no-process-env */
  return {
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
    scopes: (_process$env$SCOPES = process.env.SCOPES) === null || _process$env$SCOPES === void 0 ? void 0 : _process$env$SCOPES.split(','),
    hostScheme: (_process$env$HOST = process.env.HOST) === null || _process$env$HOST === void 0 ? void 0 : _process$env$HOST.split('://')[0],
    hostName: (_process$env$HOST2 = process.env.HOST) === null || _process$env$HOST2 === void 0 ? void 0 : _process$env$HOST2.replace(/https?:\/\//, ''),
    isEmbeddedApp: true,
    apiVersion: shopifyApi.LATEST_API_VERSION,
    ...(process.env.SHOP_CUSTOM_DOMAIN && {
      customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN]
    }),
    ...apiConfig,
    userAgentPrefix: userAgent
  };
  /* eslint-enable no-process-env */
}

function validateAppConfig(config, api) {
  const {
    sessionStorage,
    ...configWithoutSessionStorage
  } = config;
  return {
    // We override the API package's logger to add the right package context by default (and make the call simpler)
    logger: overrideLoggerPackage(api.logger),
    useOnlineTokens: false,
    exitIframePath: '/exitiframe',
    sessionStorage: sessionStorage !== null && sessionStorage !== void 0 ? sessionStorage : new shopifyAppSessionStorageMemory.MemorySessionStorage(),
    ...configWithoutSessionStorage,
    auth: config.auth,
    webhooks: config.webhooks
  };
}
function overrideLoggerPackage(logger) {
  const baseContext = {
    package: 'shopify-app'
  };
  const warningFunction = (message, context = {}) => logger.warning(message, {
    ...baseContext,
    ...context
  });
  return {
    ...logger,
    log: (severity, message, context = {}) => logger.log(severity, message, {
      ...baseContext,
      ...context
    }),
    debug: (message, context = {}) => logger.debug(message, {
      ...baseContext,
      ...context
    }),
    info: (message, context = {}) => logger.info(message, {
      ...baseContext,
      ...context
    }),
    warning: warningFunction,
    error: (message, context = {}) => logger.error(message, {
      ...baseContext,
      ...context
    }),
    deprecated: deprecated(warningFunction)
  };
}
function deprecated(warningFunction) {
  return function (version$1, message) {
    if (semver__default["default"].gte(version.SHOPIFY_EXPRESS_LIBRARY_VERSION, version$1)) {
      throw new shopifyApi.FeatureDeprecatedError(`Feature was deprecated in version ${version$1}`);
    }
    return warningFunction(`[Deprecated | ${version$1}] ${message}`);
  };
}

exports.shopifyApp = shopifyApp;
