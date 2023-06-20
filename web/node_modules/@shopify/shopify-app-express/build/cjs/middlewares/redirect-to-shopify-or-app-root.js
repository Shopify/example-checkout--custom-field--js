'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function redirectToShopifyOrAppRoot({
  api,
  config
}) {
  return function () {
    return async function (req, res) {
      if (res.headersSent) {
        var _res$locals$shopify, _res$locals$shopify$s;
        config.logger.info('Response headers have already been sent, skipping redirection to host', {
          shop: (_res$locals$shopify = res.locals.shopify) === null || _res$locals$shopify === void 0 ? void 0 : (_res$locals$shopify$s = _res$locals$shopify.session) === null || _res$locals$shopify$s === void 0 ? void 0 : _res$locals$shopify$s.shop
        });
        return;
      }
      const host = api.utils.sanitizeHost(req.query.host);
      const redirectUrl = api.config.isEmbeddedApp ? await api.auth.getEmbeddedAppUrl({
        rawRequest: req,
        rawResponse: res
      }) : `/?shop=${res.locals.shopify.session.shop}&host=${encodeURIComponent(host)}`;
      config.logger.debug(`Redirecting to host at ${redirectUrl}`, {
        shop: res.locals.shopify.session.shop
      });
      res.redirect(redirectUrl);
    };
  };
}

exports.redirectToShopifyOrAppRoot = redirectToShopifyOrAppRoot;
