"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* global process */
const http_1 = require("http");
const test_config_types_1 = require("../test_config_types");
const utils_1 = require("../utils");
// eslint-disable-next-line no-process-env
const port = parseInt(process.env.HTTP_SERVER_PORT || '3000', 10);
const errorStatusText = 'Did not work';
const requestId = 'Request id header';
const tests = {
    200: {
        expectedRequest: (0, test_config_types_1.initTestRequest)(),
        testResponse: (0, test_config_types_1.initTestResponse)(),
    },
    custom: {
        expectedRequest: (0, test_config_types_1.initTestRequest)({
            headers: { 'X-Not-A-Real-Header': 'some_value' },
        }),
        testResponse: (0, test_config_types_1.initTestResponse)({
            headers: { 'X-Not-A-Real-Header': 'some_value' },
        }),
    },
    lowercaseua: {
        expectedRequest: (0, test_config_types_1.initTestRequest)({
            headers: { 'user-agent': 'My lowercase agent' },
        }),
        testResponse: (0, test_config_types_1.initTestResponse)({
            headers: { 'user-agent': 'My lowercase agent' },
        }),
    },
    uppercaseua: {
        expectedRequest: (0, test_config_types_1.initTestRequest)({
            headers: { 'User-Agent': 'My agent' },
        }),
        testResponse: (0, test_config_types_1.initTestResponse)({
            headers: { 'User-Agent': 'My agent' },
        }),
    },
    deprecatedget: {
        expectedRequest: (0, test_config_types_1.initTestRequest)(),
        testResponse: (0, test_config_types_1.initTestResponse)({
            headers: {
                'X-Shopify-API-Deprecated-Reason': 'This API endpoint has been deprecated',
            },
            body: JSON.stringify({ message: 'Some deprecated request' }),
        }),
    },
    deprecatedpost: {
        expectedRequest: (0, test_config_types_1.initTestRequest)(),
        testResponse: (0, test_config_types_1.initTestResponse)({
            headers: {
                'X-Shopify-API-Deprecated-Reason': 'This API endpoint has been deprecated',
            },
            body: JSON.stringify({
                message: 'Some deprecated post request',
                body: {
                    query: 'some query',
                },
            }),
        }),
    },
    403: {
        expectedRequest: (0, test_config_types_1.initTestRequest)(),
        testResponse: (0, test_config_types_1.initTestResponse)({
            statusCode: 403,
            statusText: errorStatusText,
            headers: { 'x-request-id': requestId },
            body: JSON.stringify({ errors: 'Something went wrong!' }),
        }),
    },
    404: {
        expectedRequest: (0, test_config_types_1.initTestRequest)(),
        testResponse: (0, test_config_types_1.initTestResponse)({
            statusCode: 404,
            statusText: errorStatusText,
            body: JSON.stringify({}),
        }),
    },
    417: {
        expectedRequest: (0, test_config_types_1.initTestRequest)(),
        testResponse: (0, test_config_types_1.initTestResponse)({
            statusCode: 417,
            statusText: 'Expectation Failed',
        }),
    },
    429: {
        expectedRequest: (0, test_config_types_1.initTestRequest)(),
        testResponse: (0, test_config_types_1.initTestResponse)({
            statusCode: 429,
            statusText: errorStatusText,
            headers: { 'x-request-id': requestId },
            body: JSON.stringify({ errors: 'Something went wrong!' }),
        }),
    },
    wait: {
        expectedRequest: (0, test_config_types_1.initTestRequest)(),
        testResponse: (0, test_config_types_1.initTestResponse)({
            statusCode: 429,
            statusText: errorStatusText,
            headers: { 'Retry-After': (0.1).toString() },
            body: JSON.stringify({ errors: 'Something went wrong!' }),
        }),
    },
    500: {
        expectedRequest: (0, test_config_types_1.initTestRequest)(),
        testResponse: (0, test_config_types_1.initTestResponse)({
            statusCode: 500,
            statusText: errorStatusText,
            headers: { 'x-request-id': requestId },
            body: JSON.stringify({}),
        }),
    },
    error: {
        expectedRequest: (0, test_config_types_1.initTestRequest)(),
        testResponse: (0, test_config_types_1.initTestResponse)({
            statusCode: 500,
            statusText: errorStatusText,
            body: JSON.stringify({ errors: 'Something went wrong' }),
        }),
    },
    detailederror: {
        expectedRequest: (0, test_config_types_1.initTestRequest)(),
        testResponse: (0, test_config_types_1.initTestResponse)({
            statusCode: 500,
            statusText: errorStatusText,
            body: JSON.stringify({
                errors: { title: 'Invalid title', description: 'Invalid description' },
            }),
        }),
    },
};
let retryCount = 0;
const server = (0, http_1.createServer)((req, res) => {
    var _a;
    const lookup = (_a = req.url) === null || _a === void 0 ? void 0 : _a.match(/^\/url\/path\/([a-z0-9]*)$/);
    const receivedHeaders = req.headers;
    const code = lookup ? lookup[1] : '200';
    const test = tests[code] || tests['200'];
    const expectedRequest = test.expectedRequest;
    let testResponse = test.testResponse;
    if ((0, utils_1.matchHeaders)(receivedHeaders, expectedRequest.headers)) {
        if (code === 'retries' && retryCount < 2) {
            testResponse = tests['429'].testResponse;
            retryCount += 1;
        }
        if (code === 'retrythenfail') {
            if (retryCount === 0) {
                testResponse = tests['500'].testResponse;
                retryCount = 1;
            }
            else {
                testResponse = tests['403'].testResponse;
                // this is the end of the test, reset the counter
                retryCount = 0;
            }
        }
        if (code === 'retrythensuccess') {
            if (retryCount === 0) {
                testResponse = tests.wait.testResponse;
                retryCount = 1;
            }
            else {
                // this is the end of the test, reset the counter; response already defaults to success
                retryCount = 0;
            }
        }
        if (code === 'maxretries') {
            testResponse = tests['500'].testResponse;
        }
    }
    else {
        // return an "expectation failed" message
        testResponse = tests['417'].testResponse;
        testResponse.body = JSON.stringify({
            errors: {
                message: 'There was a header mismatch between expected request and received request',
                receivedHeaders,
                expectedHeaders: expectedRequest.headers,
            },
        });
    }
    // console.log(response);
    res.writeHead(testResponse.statusCode, testResponse.statusText, testResponse.headers);
    res.end(testResponse.body);
    // reset counters
    if (code !== 'retries' && retryCount === 2) {
        retryCount = 0;
    }
    if (code === 'endtest') {
        handle(0);
    }
});
function handle(_signal) {
    process.exit(0);
}
process.on('SIGINT', handle);
process.on('SIGTERM', handle);
server.listen(port, () => {
    console.log(`Listening on :${port}`);
});
//# sourceMappingURL=test-dummy-shopify-server.js.map