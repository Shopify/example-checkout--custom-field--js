"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTestResponse = exports.initTestRequest = void 0;
function initTestRequest(options) {
    const defaults = {
        method: 'get',
        url: '/url/path',
        headers: {},
    };
    return Object.assign(Object.assign({}, defaults), options);
}
exports.initTestRequest = initTestRequest;
function initTestResponse(options) {
    const defaults = {
        statusCode: 200,
        statusText: 'OK',
        headers: {},
        body: JSON.stringify({ message: 'Your HTTP request was successful!' }),
    };
    return Object.assign(Object.assign({}, defaults), options);
}
exports.initTestResponse = initTestResponse;
//# sourceMappingURL=test_config_types.js.map