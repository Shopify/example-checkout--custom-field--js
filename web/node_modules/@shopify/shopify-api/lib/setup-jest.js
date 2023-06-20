"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const semver_1 = tslib_1.__importDefault(require("semver"));
require("../adapters/mock");
const mock_test_requests_1 = require("../adapters/mock/mock_test_requests");
const http_1 = require("../runtime/http");
const version_1 = require("./version");
beforeEach(() => {
    mock_test_requests_1.mockTestRequests.reset();
});
afterEach(() => {
    const remainingResponses = mock_test_requests_1.mockTestRequests.getResponses();
    if (remainingResponses.length) {
        throw new Error(`Test did not check all expected responses, responses: ${JSON.stringify(remainingResponses, undefined, 2)}`);
    }
});
expect.extend({
    /**
     * Checks if two dates in the form of numbers are within seconds of each other
     *
     * @param received First date
     * @param compareDate Second date
     * @param seconds The number of seconds the first and second date should be within
     */
    toBeWithinSecondsOf(received, compareDate, seconds) {
        if (received &&
            compareDate &&
            Math.abs(received - compareDate) <= seconds * 1000) {
            return {
                message: () => `expected ${received} not to be within ${seconds} seconds of ${compareDate}`,
                pass: true,
            };
        }
        else {
            return {
                message: () => `expected ${received} to be within ${seconds} seconds of ${compareDate}`,
                pass: false,
            };
        }
    },
    toMatchMadeHttpRequest({ method, domain, path, query = '', headers = {}, data = undefined, attempts = 1, }) {
        const searchHeaders = (0, http_1.canonicalizeHeaders)(headers);
        const searchUrl = new URL(`https://${domain}${path}${query ? `?${query}` : ''}`);
        // We compare the sorted query items, so we can expect arguments in a different order
        const searchQueryItems = Array.from(searchUrl.searchParams.entries()).sort();
        const cleanSearchUrl = searchUrl.toString().split('?')[0];
        for (let i = 0; i < attempts; i++) {
            const matchingRequest = mock_test_requests_1.mockTestRequests.getRequest();
            if (!matchingRequest) {
                throw new Error(`No request was made, but expected ${JSON.stringify({ method, domain, path }, undefined, 2)}`);
            }
            const requestUrl = new URL(matchingRequest.url);
            const requestQueryItems = Array.from(requestUrl.searchParams.entries()).sort();
            const cleanRequestUrl = requestUrl.toString().split('?')[0];
            expect(matchingRequest).not.toBeNull();
            expect(matchingRequest.method).toEqual(method);
            expect(matchingRequest.headers).toMatchObject(searchHeaders);
            expect(cleanRequestUrl).toEqual(cleanSearchUrl);
            expect(requestQueryItems).toEqual(searchQueryItems);
            if (data) {
                if (typeof data === 'string' ||
                    data.constructor.name === 'StringContaining') {
                    expect(matchingRequest.body).toEqual(data);
                }
                else {
                    const requestBody = typeof matchingRequest.body === 'string'
                        ? JSON.parse(matchingRequest.body)
                        : matchingRequest.body;
                    expect(requestBody).toMatchObject(data);
                }
            }
            else {
                expect(matchingRequest.body).toBeFalsy();
            }
        }
        return {
            message: () => `expected to have seen the right HTTP requests`,
            pass: true,
        };
    },
    toBeWithinDeprecationSchedule(version) {
        return {
            message: () => `Found deprecation limited to version ${version}, please update or remove it.`,
            pass: semver_1.default.lt(version_1.SHOPIFY_API_LIBRARY_VERSION, version),
        };
    },
});
//# sourceMappingURL=setup-jest.js.map