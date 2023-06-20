"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeCompare = void 0;
const tslib_1 = require("tslib");
const ShopifyErrors = tslib_1.__importStar(require("../../error"));
function safeCompare(strA, strB) {
    if (typeof strA === typeof strB) {
        const enc = new TextEncoder();
        const buffA = enc.encode(JSON.stringify(strA));
        const buffB = enc.encode(JSON.stringify(strB));
        if (buffA.length === buffB.length) {
            return timingSafeEqual(buffA, buffB);
        }
    }
    else {
        throw new ShopifyErrors.SafeCompareError(`Mismatched data types provided: ${typeof strA} and ${typeof strB}`);
    }
    return false;
}
exports.safeCompare = safeCompare;
// Buffer must be same length for this function to be secure.
function timingSafeEqual(bufA, bufB) {
    const viewA = new Uint8Array(bufA);
    const viewB = new Uint8Array(bufB);
    let out = 0;
    for (let i = 0; i < viewA.length; i++) {
        out |= viewA[i] ^ viewB[i];
    }
    return out === 0;
}
//# sourceMappingURL=safe-compare.js.map