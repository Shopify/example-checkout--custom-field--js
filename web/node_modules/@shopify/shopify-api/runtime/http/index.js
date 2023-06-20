"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAbstractConvertHeadersFunc = exports.abstractConvertHeaders = exports.setAbstractConvertResponseFunc = exports.abstractConvertResponse = exports.setAbstractConvertIncomingResponseFunc = exports.abstractConvertIncomingResponse = exports.setAbstractConvertRequestFunc = exports.abstractConvertRequest = exports.setAbstractFetchFunc = exports.abstractFetch = exports.isOK = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./cookies"), exports);
tslib_1.__exportStar(require("./headers"), exports);
tslib_1.__exportStar(require("./utils"), exports);
tslib_1.__exportStar(require("./types"), exports);
function isOK(resp) {
    // https://fetch.spec.whatwg.org/#ok-status
    return resp.statusCode >= 200 && resp.statusCode <= 299;
}
exports.isOK = isOK;
// We ignore mutable export linting errors because we explicitly want these abstract functions to be overwritten.
// eslint-disable-next-line import/no-mutable-exports
let abstractFetch = () => {
    throw new Error("Missing adapter implementation for 'abstractFetch' - make sure to import the appropriate adapter for your platform");
};
exports.abstractFetch = abstractFetch;
function setAbstractFetchFunc(func) {
    exports.abstractFetch = func;
}
exports.setAbstractFetchFunc = setAbstractFetchFunc;
// eslint-disable-next-line import/no-mutable-exports
let abstractConvertRequest = () => {
    throw new Error("Missing adapter implementation for 'abstractConvertRequest' - make sure to import the appropriate adapter for your platform");
};
exports.abstractConvertRequest = abstractConvertRequest;
function setAbstractConvertRequestFunc(func) {
    exports.abstractConvertRequest = func;
}
exports.setAbstractConvertRequestFunc = setAbstractConvertRequestFunc;
// By default we just return an empty NormalizedResponse because not all adapters will need to convert an incoming response
// eslint-disable-next-line import/no-mutable-exports
let abstractConvertIncomingResponse = () => Promise.resolve({});
exports.abstractConvertIncomingResponse = abstractConvertIncomingResponse;
function setAbstractConvertIncomingResponseFunc(func) {
    exports.abstractConvertIncomingResponse = func;
}
exports.setAbstractConvertIncomingResponseFunc = setAbstractConvertIncomingResponseFunc;
// eslint-disable-next-line import/no-mutable-exports
let abstractConvertResponse = () => {
    throw new Error("Missing adapter implementation for 'abstractConvertResponse' - make sure to import the appropriate adapter for your platform");
};
exports.abstractConvertResponse = abstractConvertResponse;
function setAbstractConvertResponseFunc(func) {
    exports.abstractConvertResponse = func;
}
exports.setAbstractConvertResponseFunc = setAbstractConvertResponseFunc;
// eslint-disable-next-line import/no-mutable-exports
let abstractConvertHeaders = () => {
    throw new Error("Missing adapter implementation for 'abstractConvertHeaders' - make sure to import the appropriate adapter for your platform");
};
exports.abstractConvertHeaders = abstractConvertHeaders;
function setAbstractConvertHeadersFunc(func) {
    exports.abstractConvertHeaders = func;
}
exports.setAbstractConvertHeadersFunc = setAbstractConvertHeadersFunc;
//# sourceMappingURL=index.js.map