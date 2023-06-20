'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var redirectToAuth = require('../redirect-to-auth.js');
var cspHeaders = require('./csp-headers.js');
var validateAuthenticatedSession = require('./validate-authenticated-session.js');
var hasValidAccessToken = require('./has-valid-access-token.js');

function ensureInstalled({
  api,
  config
}) {
  return function ensureInstalledOnShop() {
    return async (req, res, next) => {
      config.logger.info('Running ensureInstalledOnShop');
      if (!api.config.isEmbeddedApp) {
        config.logger.warning('ensureInstalledOnShop() should only be used in embedded apps; calling validateAuthenticatedSession() instead');
        return validateAuthenticatedSession.validateAuthenticatedSession({
          api,
          config
        })()(req, res, next);
      }
      const shop = getRequestShop(api, config, req, res);
      if (!shop) {
        return undefined;
      }
      config.logger.debug('Checking if shop has installed the app', {
        shop
      });
      const sessionId = api.session.getOfflineId(shop);
      const session = await config.sessionStorage.loadSession(sessionId);
      const exitIframeRE = new RegExp(`^${config.exitIframePath}`, 'i');
      if (!session && !req.originalUrl.match(exitIframeRE)) {
        config.logger.debug('App installation was not found for shop, redirecting to auth', {
          shop
        });
        return redirectToAuth.redirectToAuth({
          req,
          res,
          api,
          config
        });
      }
      if (api.config.isEmbeddedApp && req.query.embedded !== '1') {
        if (await sessionHasValidAccessToken(api, config, session)) {
          await embedAppIntoShopify(api, config, req, res, shop);
          return undefined;
        } else {
          config.logger.info('Found a session, but it is not valid. Redirecting to auth', {
            shop
          });
          return redirectToAuth.redirectToAuth({
            req,
            res,
            api,
            config
          });
        }
      }
      cspHeaders.addCSPHeader(api, req, res);
      config.logger.info('App is installed and ready to load', {
        shop
      });
      return next();
    };
  };
}
function deleteAppInstallationHandler(appInstallations, config) {
  return async function (_topic, shop, _body, _webhookId) {
    config.logger.debug('Deleting shop sessions', {
      shop
    });
    await appInstallations.delete(shop);
  };
}
function getRequestShop(api, config, req, res) {
  if (typeof req.query.shop !== 'string') {
    config.logger.error('ensureInstalledOnShop did not receive a shop query argument', {
      shop: req.query.shop
    });
    res.status(400);
    res.send('No shop provided');
    return undefined;
  }
  const shop = api.utils.sanitizeShop(req.query.shop);
  if (!shop) {
    config.logger.error('ensureInstalledOnShop did not receive a valid shop query argument', {
      shop: req.query.shop
    });
    res.status(422);
    res.send('Invalid shop provided');
    return undefined;
  }
  return shop;
}
async function sessionHasValidAccessToken(api, config, session) {
  if (!session) {
    return false;
  }
  try {
    return session.isActive(api.config.scopes) && (await hasValidAccessToken.hasValidAccessToken(api, session));
  } catch (error) {
    config.logger.error(`Could not check if session was valid: ${error}`, {
      shop: session.shop
    });
    return false;
  }
}
async function embedAppIntoShopify(api, config, req, res, shop) {
  let embeddedUrl;
  try {
    embeddedUrl = await api.auth.getEmbeddedAppUrl({
      rawRequest: req,
      rawResponse: res
    });
  } catch (error) {
    config.logger.error(`ensureInstalledOnShop did not receive a host query argument`, {
      shop
    });
    res.status(400);
    res.send('No host provided');
    return;
  }
  config.logger.debug(`Request is not embedded but app is. Redirecting to ${embeddedUrl} to embed the app`, {
    shop
  });
  res.redirect(embeddedUrl + req.path);
}

exports.deleteAppInstallationHandler = deleteAppInstallationHandler;
exports.ensureInstalled = ensureInstalled;
