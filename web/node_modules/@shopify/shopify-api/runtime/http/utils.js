"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitN = void 0;
function splitN(str, sep, maxNumParts) {
    const parts = str.split(sep);
    const maxParts = Math.min(Math.abs(maxNumParts), parts.length);
    return [...parts.slice(0, maxParts - 1), parts.slice(maxParts - 1).join(sep)];
}
exports.splitN = splitN;
//# sourceMappingURL=utils.js.map