"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatHeaders = exports.removeHeader = exports.canonicalizeHeaders = exports.addHeader = exports.setHeader = exports.getHeader = exports.getHeaders = exports.canonicalizeHeaderName = void 0;
function canonicalizeHeaderName(hdr) {
    return hdr.replace(/(^|-)(\w+)/g, (_fullMatch, start, letters) => start +
        letters.slice(0, 1).toUpperCase() +
        letters.slice(1).toLowerCase());
}
exports.canonicalizeHeaderName = canonicalizeHeaderName;
function getHeaders(headers, needle_) {
    const result = [];
    if (!headers)
        return result;
    const needle = canonicalizeHeaderName(needle_);
    for (const [key, values] of Object.entries(headers)) {
        if (canonicalizeHeaderName(key) !== needle)
            continue;
        if (Array.isArray(values)) {
            result.push(...values);
        }
        else {
            result.push(values);
        }
    }
    return result;
}
exports.getHeaders = getHeaders;
function getHeader(headers, needle) {
    var _a;
    if (!headers)
        return undefined;
    return (_a = getHeaders(headers, needle)) === null || _a === void 0 ? void 0 : _a[0];
}
exports.getHeader = getHeader;
function setHeader(headers, key, value) {
    canonicalizeHeaders(headers);
    headers[canonicalizeHeaderName(key)] = [value];
}
exports.setHeader = setHeader;
function addHeader(headers, key, value) {
    canonicalizeHeaders(headers);
    const canonKey = canonicalizeHeaderName(key);
    let list = headers[canonKey];
    if (!list) {
        list = [];
    }
    else if (!Array.isArray(list)) {
        list = [list];
    }
    headers[canonKey] = list;
    list.push(value);
}
exports.addHeader = addHeader;
function canonicalizeValue(value) {
    if (typeof value === 'number')
        return value.toString();
    return value;
}
function canonicalizeHeaders(hdr) {
    for (const [key, values] of Object.entries(hdr)) {
        const canonKey = canonicalizeHeaderName(key);
        if (!hdr[canonKey])
            hdr[canonKey] = [];
        if (!Array.isArray(hdr[canonKey]))
            hdr[canonKey] = [canonicalizeValue(hdr[canonKey])];
        if (key === canonKey)
            continue;
        delete hdr[key];
        hdr[canonKey].push(...[values].flat().map((value) => canonicalizeValue(value)));
    }
    return hdr;
}
exports.canonicalizeHeaders = canonicalizeHeaders;
function removeHeader(headers, needle) {
    canonicalizeHeaders(headers);
    const canonKey = canonicalizeHeaderName(needle);
    delete headers[canonKey];
}
exports.removeHeader = removeHeader;
/*
  Turns a Headers object into a array of tuples, as expected by web standards to
    handle headers that can be specified multiple times.
  [
    ["Set-Cookie", "a=b"],
    ["Set-Cookie", "x=y"],
    // ...
  ]
*/
function flatHeaders(headers) {
    return Object.entries(headers).flatMap(([header, values]) => Array.isArray(values)
        ? values.map((value) => [header, value])
        : [[header, values]]);
}
exports.flatHeaders = flatHeaders;
//# sourceMappingURL=headers.js.map