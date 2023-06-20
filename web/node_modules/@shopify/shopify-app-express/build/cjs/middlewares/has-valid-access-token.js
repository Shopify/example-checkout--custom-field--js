'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var shopifyApi = require('@shopify/shopify-api');

const TEST_GRAPHQL_QUERY = `
{
  shop {
    name
  }
}`;
async function hasValidAccessToken(api, session) {
  try {
    const client = new api.clients.Graphql({
      session
    });
    await client.query({
      data: TEST_GRAPHQL_QUERY
    });
    return true;
  } catch (error) {
    if (error instanceof shopifyApi.HttpResponseError && error.response.code === 401) {
      // Re-authenticate if we get a 401 response
      return false;
    } else {
      throw error;
    }
  }
}

exports.hasValidAccessToken = hasValidAccessToken;
