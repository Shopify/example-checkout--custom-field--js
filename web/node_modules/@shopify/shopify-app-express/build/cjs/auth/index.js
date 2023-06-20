'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var redirectToAuth = require('../redirect-to-auth.js');
var authCallback = require('./auth-callback.js');

function auth({
  api,
  config
}) {
  return {
    begin() {
      return async (req, res) => redirectToAuth.redirectToAuth({
        req,
        res,
        api,
        config
      });
    },
    callback() {
      return async (req, res, next) => {
        config.logger.info('Handling request to complete OAuth process');
        const oauthCompleted = await authCallback.authCallback({
          req,
          res,
          api,
          config
        });
        if (oauthCompleted) {
          next();
        }
      };
    }
  };
}

exports.auth = auth;
