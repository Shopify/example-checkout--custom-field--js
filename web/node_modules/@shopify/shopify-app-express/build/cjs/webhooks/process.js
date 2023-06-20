'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

async function process({
  req,
  res,
  api,
  config
}) {
  try {
    await api.webhooks.process({
      rawBody: req.body,
      rawRequest: req,
      rawResponse: res
    });
    config.logger.info('Webhook processed, returned status code 200');
  } catch (error) {
    config.logger.error(`Failed to process webhook: ${error}`);

    // The library will respond even if the handler throws an error
  }
}

exports.process = process;
