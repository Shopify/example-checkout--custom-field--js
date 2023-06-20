"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const types_1 = require("../types");
function log(config) {
    return function (severity, message, context = {}) {
        if (severity > config.logger.level) {
            return;
        }
        const prefix = [];
        if (config.logger.timestamps) {
            prefix.push(`${new Date().toISOString().slice(0, -5)}Z`);
        }
        let packageString = context.package || 'shopify-api';
        delete context.package;
        switch (severity) {
            case types_1.LogSeverity.Debug:
                packageString = `${packageString}/DEBUG`;
                break;
            case types_1.LogSeverity.Info:
                packageString = `${packageString}/INFO`;
                break;
            case types_1.LogSeverity.Warning:
                packageString = `${packageString}/WARNING`;
                break;
            case types_1.LogSeverity.Error:
                packageString = `${packageString}/ERROR`;
                break;
        }
        prefix.push(packageString);
        const contextParts = [];
        Object.entries(context).forEach(([key, value]) => {
            contextParts.push(`${key}: ${value}`);
        });
        let suffix = '';
        if (contextParts.length > 0) {
            suffix = ` | {${contextParts.join(', ')}}`;
        }
        config.logger.log(severity, `[${prefix.join('] [')}] ${message}${suffix}`);
    };
}
exports.log = log;
//# sourceMappingURL=log.js.map