"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSuite = void 0;
const tslib_1 = require("tslib");
const types_1 = require("../../lib/clients/http_client/types");
const processed_query_1 = tslib_1.__importDefault(require("../../lib/utils/processed-query"));
const test_config_types_1 = require("./test_config_types");
const postData = {
    title: 'Test product',
    amount: 10,
};
const putData = {
    title: 'Test product',
    amount: 10,
};
const graphqlQuery = `
  query {
    webhookSubscriptions(first:5) {
      edges {
        node {
          id
          endpoint
        }
      }
    }
  }
  `;
exports.testSuite = [
    {
        name: 'can make GET request',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)(),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'can make POST request with type JSON',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                method: 'post',
                bodyType: types_1.DataType.JSON,
                body: JSON.stringify(postData),
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'can make POST request with type JSON and data is already formatted',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                method: 'post',
                bodyType: types_1.DataType.JSON,
                body: JSON.stringify(JSON.stringify(postData)),
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'can make POST request with zero-length JSON',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                method: 'post',
                bodyType: types_1.DataType.JSON,
                body: JSON.stringify(''),
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'can make POST request with form-data type',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                method: 'post',
                bodyType: types_1.DataType.URLEncoded,
                body: JSON.stringify(postData),
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'can make POST request with form-data type and data is already formatted',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                method: 'post',
                bodyType: types_1.DataType.URLEncoded,
                body: processed_query_1.default.stringify(postData),
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'can make POST request with GraphQL type',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                method: 'post',
                bodyType: types_1.DataType.GraphQL,
                body: graphqlQuery,
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'can make PUT request with type JSON',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                method: 'put',
                url: '/url/path/123',
                bodyType: types_1.DataType.JSON,
                body: JSON.stringify(putData),
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'can make DELETE request',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                method: 'delete',
                url: '/url/path/123',
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'gracefully handles 403 error',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({ url: '/url/path/403' }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                statusCode: 403,
                statusText: 'Did not work',
                errorType: 'HttpResponseError',
                expectRequestId: 'Request id header',
            }),
        },
    },
    {
        name: 'gracefully handles 404 error',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({ url: '/url/path/404' }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                statusCode: 404,
                statusText: 'Did not work',
                errorType: 'HttpResponseError',
            }),
        },
    },
    {
        name: 'gracefully handles 429 error',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({ url: '/url/path/429' }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                statusCode: 429,
                statusText: 'Did not work',
                errorType: 'HttpThrottlingError',
                expectRequestId: 'Request id header',
            }),
        },
    },
    {
        name: 'gracefully handles 500 error',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({ url: '/url/path/500' }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                statusCode: 500,
                statusText: 'Did not work',
                errorType: 'HttpInternalError',
                expectRequestId: 'Request id header',
            }),
        },
    },
    {
        name: 'allows custom headers',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                url: '/url/path/custom',
                headers: { 'X-Not-A-Real-Header': 'some_value' },
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                headers: { 'X-Not-A-Real-Header': 'some_value' },
            }),
        },
    },
    {
        name: 'extends User-Agent if it is provided (capitalized)',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                url: '/url/path/uppercaseua',
                headers: { 'User-Agent': 'My agent' },
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                headers: { 'User-Agent': 'My agent' },
            }),
        },
    },
    {
        name: 'extends User-Agent if it is provided (lowercase)',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                url: '/url/path/lowercaseua',
                headers: { 'user-agent': 'My lowercase agent' },
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                headers: { 'user-agent': 'My lowercase agent' },
            }),
        },
    },
    {
        name: 'fails with invalid retry count',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({ tries: -1 }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                statusCode: 500,
                statusText: 'Did not work',
                errorType: 'HttpRequestError',
            }),
        },
    },
    {
        name: 'retries failed requests but returns success',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                url: '/url/path/retries',
                tries: 3,
                retryTimeoutTimer: 0,
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'retries failed requests and stops on non-retriable errors',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                url: '/url/path/retrythenfail',
                tries: 3,
                retryTimeoutTimer: 0,
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                statusCode: 403,
                statusText: 'Did not work',
                errorType: 'HttpResponseError',
            }),
        },
    },
    {
        name: 'stops retrying after reaching the limit',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                url: '/url/path/maxretries',
                tries: 3,
                retryTimeoutTimer: 0,
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                statusCode: 500,
                statusText: 'Did not work',
                errorType: 'HttpMaxRetriesError',
            }),
        },
    },
    {
        name: 'waits for the amount of time defined by the Retry-After header',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                url: '/url/path/retrythensuccess',
                tries: 2,
                retryTimeoutTimer: 3000,
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'properly encodes strings in the error message',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                url: '/url/path/error',
                retryTimeoutTimer: 0,
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                statusCode: 500,
                statusText: 'Did not work',
                errorType: 'HttpInternalError',
                errorMessage: `Shopify internal error:\n"Something went wrong"`,
            }),
        },
    },
    {
        name: 'properly encodes objects in the error message',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                url: '/url/path/detailederror',
                retryTimeoutTimer: 0,
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)({
                statusCode: 500,
                statusText: 'Did not work',
                errorType: 'HttpInternalError',
                errorMessage: `Shopify internal error:` +
                    `\n{` +
                    `\n  "title": "Invalid title",` +
                    `\n  "description": "Invalid description"` +
                    `\n}`,
            }),
        },
    },
    {
        name: 'adds missing slashes to paths',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({ url: 'url/path' }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
    {
        name: 'properly formats arrays and hashes in query strings',
        config: {
            testRequest: (0, test_config_types_1.initTestRequest)({
                url: '/url/path/query',
                query: JSON.stringify({
                    array: ['a', 'b', 'c'],
                    // eslint-disable-next-line id-length
                    hash: { a: 'b', c: 'd' },
                }),
            }),
            expectedResponse: (0, test_config_types_1.initTestResponse)(),
        },
    },
];
//# sourceMappingURL=test_suite.js.map