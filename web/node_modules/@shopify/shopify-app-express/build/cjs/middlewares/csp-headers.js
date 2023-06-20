'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function cspHeaders({
  api
}) {
  return function cspHeaders() {
    return async (req, res, next) => {
      addCSPHeader(api, req, res);
      next();
    };
  };
}
function addCSPHeader(api, req, res) {
  const shop = api.utils.sanitizeShop(req.query.shop);
  if (api.config.isEmbeddedApp && shop) {
    res.setHeader('Content-Security-Policy', `frame-ancestors https://${encodeURIComponent(shop)} https://admin.shopify.com;`);
  } else {
    res.setHeader('Content-Security-Policy', `frame-ancestors 'none';`);
  }
}

exports.addCSPHeader = addCSPHeader;
exports.cspHeaders = cspHeaders;
