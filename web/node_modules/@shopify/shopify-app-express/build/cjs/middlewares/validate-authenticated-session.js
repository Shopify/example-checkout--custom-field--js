'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var shopifyApi = require('@shopify/shopify-api');
var redirectToAuth = require('../redirect-to-auth.js');
var redirectOutOfApp = require('../redirect-out-of-app.js');
var hasValidAccessToken = require('./has-valid-access-token.js');

function validateAuthenticatedSession({
  api,
  config
}) {
  return function validateAuthenticatedSession() {
    return async (req, res, next) => {
      var _session, _req$headers$authoriz;
      config.logger.info('Running validateAuthenticatedSession');
      let sessionId;
      try {
        sessionId = await api.session.getCurrentId({
          isOnline: config.useOnlineTokens,
          rawRequest: req,
          rawResponse: res
        });
      } catch (error) {
        config.logger.error(`Error when loading session from storage: ${error}`);
        handleSessionError(req, res, error);
        return undefined;
      }
      let session;
      if (sessionId) {
        try {
          session = await config.sessionStorage.loadSession(sessionId);
        } catch (error) {
          config.logger.error(`Error when loading session from storage: ${error}`);
          res.status(500);
          res.send(error.message);
          return undefined;
        }
      }
      let shop = api.utils.sanitizeShop(req.query.shop) || ((_session = session) === null || _session === void 0 ? void 0 : _session.shop);
      if (session && shop && session.shop !== shop) {
        config.logger.debug('Found a session for a different shop in the request', {
          currentShop: session.shop,
          requestShop: shop
        });
        return redirectToAuth.redirectToAuth({
          req,
          res,
          api,
          config
        });
      }
      if (session) {
        config.logger.debug('Request session found and loaded', {
          shop: session.shop
        });
        if (session.isActive(api.config.scopes)) {
          config.logger.debug('Request session exists and is active', {
            shop: session.shop
          });
          if (await hasValidAccessToken.hasValidAccessToken(api, session)) {
            config.logger.info('Request session has a valid access token', {
              shop: session.shop
            });
            res.locals.shopify = {
              ...res.locals.shopify,
              session
            };
            return next();
          }
        }
      }
      const bearerPresent = (_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.match(/Bearer (.*)/);
      if (bearerPresent) {
        if (!shop) {
          shop = await setShopFromSessionOrToken(api, session, bearerPresent[1]);
        }
      }
      const redirectUri = `${config.auth.path}?shop=${shop}`;
      config.logger.info(`Session was not valid. Redirecting to ${redirectUri}`, {
        shop
      });
      return redirectOutOfApp.redirectOutOfApp({
        config
      })({
        req,
        res,
        redirectUri,
        shop: shop
      });
    };
  };
}
function handleSessionError(_req, res, error) {
  switch (true) {
    case error instanceof shopifyApi.InvalidJwtError:
      res.status(401);
      res.send(error.message);
      break;
    default:
      res.status(500);
      res.send(error.message);
      break;
  }
}
async function setShopFromSessionOrToken(api, session, token) {
  let shop;
  if (session) {
    shop = session.shop;
  } else if (api.config.isEmbeddedApp) {
    const payload = await api.session.decodeSessionToken(token);
    shop = payload.dest.replace('https://', '');
  }
  return shop;
}

exports.validateAuthenticatedSession = validateAuthenticatedSession;
