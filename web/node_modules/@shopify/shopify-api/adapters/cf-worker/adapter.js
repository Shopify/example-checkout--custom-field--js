"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workerRuntimeString = exports.workerCreateDefaultStorage = exports.workerFetch = exports.workerConvertHeaders = exports.workerConvertResponse = exports.workerConvertRequest = void 0;
const tslib_1 = require("tslib");
const error_1 = require("../../lib/error");
const http_1 = require("../../runtime/http");
function workerConvertRequest(adapterArgs) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const request = adapterArgs.rawRequest;
        const headers = {};
        for (const [key, value] of request.headers.entries()) {
            (0, http_1.addHeader)(headers, key, value);
        }
        const url = new URL(request.url);
        return {
            headers,
            method: (_a = request.method) !== null && _a !== void 0 ? _a : 'GET',
            url: `${url.pathname}${url.search}${url.hash}`,
        };
    });
}
exports.workerConvertRequest = workerConvertRequest;
function workerConvertResponse(resp, adapterArgs) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Response(resp.body, {
            status: resp.statusCode,
            statusText: resp.statusText,
            headers: yield workerConvertHeaders((_a = resp.headers) !== null && _a !== void 0 ? _a : {}, adapterArgs),
        });
    });
}
exports.workerConvertResponse = workerConvertResponse;
function workerConvertHeaders(headers, _adapterArgs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return Promise.resolve((0, http_1.flatHeaders)(headers !== null && headers !== void 0 ? headers : {}));
    });
}
exports.workerConvertHeaders = workerConvertHeaders;
function workerFetch({ url, method, headers = {}, body, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const resp = yield fetch(url, { method, headers: (0, http_1.flatHeaders)(headers), body });
        const respBody = yield resp.text();
        return {
            statusCode: resp.status,
            statusText: resp.statusText,
            body: respBody,
            headers: (0, http_1.canonicalizeHeaders)(Object.fromEntries(resp.headers.entries())),
        };
    });
}
exports.workerFetch = workerFetch;
function workerCreateDefaultStorage() {
    throw new error_1.ShopifyError('You must specify a session storage implementation for CloudFlare workers');
}
exports.workerCreateDefaultStorage = workerCreateDefaultStorage;
function workerRuntimeString() {
    return 'Cloudflare worker';
}
exports.workerRuntimeString = workerRuntimeString;
//# sourceMappingURL=adapter.js.map