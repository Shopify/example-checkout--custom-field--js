"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockRuntimeString = exports.mockFetch = exports.mockConvertHeaders = exports.mockConvertResponse = exports.mockConvertRequest = void 0;
const tslib_1 = require("tslib");
const http_1 = require("../../runtime/http");
const mock_test_requests_1 = require("./mock_test_requests");
function mockConvertRequest(adapterArgs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return Promise.resolve(adapterArgs.rawRequest);
    });
}
exports.mockConvertRequest = mockConvertRequest;
function mockConvertResponse(response, _adapterArgs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return Promise.resolve(response);
    });
}
exports.mockConvertResponse = mockConvertResponse;
function mockConvertHeaders(headers, _adapterArgs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return Promise.resolve(headers);
    });
}
exports.mockConvertHeaders = mockConvertHeaders;
function mockFetch({ url, method, headers = {}, body, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        mock_test_requests_1.mockTestRequests.requestList.push({
            url,
            method,
            headers: (0, http_1.canonicalizeHeaders)(headers),
            body,
        });
        const next = mock_test_requests_1.mockTestRequests.responseList.shift();
        if (!next) {
            throw new Error(`Missing mock for ${method} to ${url}, have you queued all required responses?`);
        }
        if (next instanceof Error) {
            throw next;
        }
        return next;
    });
}
exports.mockFetch = mockFetch;
function mockRuntimeString() {
    return 'Mock adapter';
}
exports.mockRuntimeString = mockRuntimeString;
//# sourceMappingURL=adapter.js.map