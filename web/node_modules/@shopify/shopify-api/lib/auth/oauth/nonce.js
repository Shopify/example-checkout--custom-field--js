"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonce = void 0;
const crypto_1 = require("../../../runtime/crypto");
function nonce() {
    const length = 15;
    // eslint-disable-next-line no-warning-comments
    // TODO Remove the randomBytes call when dropping Node 14 support
    const bytes = crypto_1.crypto.getRandomValues
        ? crypto_1.crypto.getRandomValues(new Uint8Array(length))
        : crypto_1.crypto.randomBytes(length);
    const nonce = bytes
        .map((byte) => {
        return byte % 10;
    })
        .join('');
    return nonce;
}
exports.nonce = nonce;
//# sourceMappingURL=nonce.js.map