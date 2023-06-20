"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeRuntimeString = exports.nodeFetch = exports.nodeConvertAndSetHeaders = exports.nodeConvertAndSendResponse = exports.nodeConvertIncomingResponse = exports.nodeConvertRequest = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const http_1 = require("../../runtime/http");
function nodeConvertRequest(adapterArgs) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const req = adapterArgs.rawRequest;
        return {
            headers: (0, http_1.canonicalizeHeaders)(Object.assign({}, req.headers)),
            method: (_a = req.method) !== null && _a !== void 0 ? _a : 'GET',
            // Express.js overrides the url property, so we want to use originalUrl for it
            url: req.originalUrl || req.url,
        };
    });
}
exports.nodeConvertRequest = nodeConvertRequest;
function nodeConvertIncomingResponse(adapterArgs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return {
            statusCode: adapterArgs.rawResponse.statusCode,
            statusText: adapterArgs.rawResponse.statusMessage,
            headers: (0, http_1.canonicalizeHeaders)(adapterArgs.rawResponse.getHeaders()),
        };
    });
}
exports.nodeConvertIncomingResponse = nodeConvertIncomingResponse;
function nodeConvertAndSendResponse(response, adapterArgs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const res = adapterArgs.rawResponse;
        if (response.headers) {
            yield nodeConvertAndSetHeaders(response.headers, adapterArgs);
        }
        if (response.body) {
            res.write(response.body);
        }
        res.statusCode = response.statusCode;
        res.statusMessage = response.statusText;
        res.end();
    });
}
exports.nodeConvertAndSendResponse = nodeConvertAndSendResponse;
function nodeConvertAndSetHeaders(headers, adapterArgs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const res = adapterArgs.rawResponse;
        Object.entries(headers).forEach(([header, value]) => res.setHeader(header, value));
    });
}
exports.nodeConvertAndSetHeaders = nodeConvertAndSetHeaders;
function nodeFetch({ url, method, headers = {}, body, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const resp = yield (0, node_fetch_1.default)(url, { method, headers: (0, http_1.flatHeaders)(headers), body });
        const respBody = yield resp.text();
        return {
            statusCode: resp.status,
            statusText: resp.statusText,
            body: respBody,
            headers: (0, http_1.canonicalizeHeaders)(Object.fromEntries(resp.headers.entries())),
        };
    });
}
exports.nodeFetch = nodeFetch;
function nodeRuntimeString() {
    return `Node ${process.version}`;
}
exports.nodeRuntimeString = nodeRuntimeString;
//# sourceMappingURL=adapter.js.map