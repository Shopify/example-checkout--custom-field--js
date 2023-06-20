"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeOptions = exports.arrayifyInput = exports.isNullOrUndefined = void 0;
function isNullOrUndefined(input) {
    if (input === undefined || input === null) {
        return true;
    }
    return false;
}
exports.isNullOrUndefined = isNullOrUndefined;
function arrayifyInput(input) {
    return Array.isArray(input) ? input : [input];
}
exports.arrayifyInput = arrayifyInput;
function mergeOptions(options) {
    const defaultOptions = {
        signal: 'SIGKILL'
    };
    return Object.assign(Object.assign({}, defaultOptions), options);
}
exports.mergeOptions = mergeOptions;
//# sourceMappingURL=helpers.js.map