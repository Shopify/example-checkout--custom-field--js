"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHMACKey = void 0;
function getHMACKey(key) {
    const arrayBuffer = new Uint8Array(key.length);
    for (let i = 0, keyLen = key.length; i < keyLen; i++) {
        arrayBuffer[i] = key.charCodeAt(i);
    }
    return arrayBuffer;
}
exports.getHMACKey = getHMACKey;
//# sourceMappingURL=get-hmac-key.js.map