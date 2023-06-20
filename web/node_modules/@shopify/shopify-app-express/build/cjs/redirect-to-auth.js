'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var redirectOutOfApp = require('./redirect-out-of-app.js');

async function redirectToAuth({
  req,
  res,
  api,
  config,
  isOnline = false
}) {
  const shop = api.utils.sanitizeShop(req.query.shop);
  if (!shop) {
    config.logger.error('No shop provided to redirect to auth');
    res.status(500);
    res.send('No shop provided');
    return;
  }
  if (req.query.embedded === '1') {
    clientSideRedirect(api, config, req, res, shop);
  } else {
    await serverSideRedirect(api, config, req, res, shop, isOnline);
  }
}
function clientSideRedirect(api, config, req, res, shop) {
  const host = api.utils.sanitizeHost(req.query.host);
  if (!host) {
    res.status(500);
    res.send('No host provided');
    return;
  }
  const redirectUriParams = new URLSearchParams({
    shop,
    host
  }).toString();
  const redirectUri = `${api.config.hostScheme}://${api.config.hostName}${config.auth.path}?${redirectUriParams}`;
  redirectOutOfApp.redirectOutOfApp({
    config
  })({
    req,
    res,
    redirectUri,
    shop
  });
}
async function serverSideRedirect(api, config, req, res, shop, isOnline) {
  config.logger.debug(`Redirecting to auth at ${config.auth.path}, with callback ${config.auth.callbackPath}`, {
    shop,
    isOnline
  });
  await api.auth.begin({
    callbackPath: config.auth.callbackPath,
    shop,
    isOnline,
    rawRequest: req,
    rawResponse: res
  });
}

exports.redirectToAuth = redirectToAuth;
