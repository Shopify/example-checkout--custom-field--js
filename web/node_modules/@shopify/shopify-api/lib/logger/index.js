"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const tslib_1 = require("tslib");
const semver_1 = tslib_1.__importDefault(require("semver"));
const types_1 = require("../types");
const error_1 = require("../error");
const version_1 = require("../version");
const log_1 = require("./log");
function logger(config) {
    const logFunction = (0, log_1.log)(config);
    return {
        log: logFunction,
        debug: (message, context = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return logFunction(types_1.LogSeverity.Debug, message, context); }),
        info: (message, context = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return logFunction(types_1.LogSeverity.Info, message, context); }),
        warning: (message, context = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return logFunction(types_1.LogSeverity.Warning, message, context); }),
        error: (message, context = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return logFunction(types_1.LogSeverity.Error, message, context); }),
        deprecated: deprecated(logFunction),
    };
}
exports.logger = logger;
function deprecated(logFunction) {
    return function (version, message) {
        if (semver_1.default.gte(version_1.SHOPIFY_API_LIBRARY_VERSION, version)) {
            throw new error_1.FeatureDeprecatedError(`Feature was deprecated in version ${version}`);
        }
        return logFunction(types_1.LogSeverity.Warning, `[Deprecated | ${version}] ${message}`);
    };
}
//# sourceMappingURL=index.js.map