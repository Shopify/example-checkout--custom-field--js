"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionCompatible = void 0;
const types_1 = require("../types");
function versionCompatible(config) {
    return (referenceVersion, currentVersion = config.apiVersion) => {
        // Return true if not using a dated version
        if (currentVersion === types_1.ApiVersion.Unstable) {
            return true;
        }
        const numericVersion = (version) => parseInt(version.replace('-', ''), 10);
        const current = numericVersion(currentVersion);
        const reference = numericVersion(referenceVersion);
        return current >= reference;
    };
}
exports.versionCompatible = versionCompatible;
//# sourceMappingURL=version-compatible.js.map