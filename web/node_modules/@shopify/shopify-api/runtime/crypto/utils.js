"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashString = exports.asBase64 = exports.asHex = exports.createSHA256HMAC = void 0;
const tslib_1 = require("tslib");
const error_1 = require("../../lib/error");
const crypto_1 = require("./crypto");
const types_1 = require("./types");
function createSHA256HMAC(secret, payload, returnFormat = types_1.HashFormat.Base64) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const cryptoLib = typeof (crypto_1.crypto === null || crypto_1.crypto === void 0 ? void 0 : crypto_1.crypto.webcrypto) === 'undefined'
            ? crypto_1.crypto
            : crypto_1.crypto.webcrypto;
        // eslint-disable-next-line no-warning-comments
        // TODO Make the subtle implementation the default when dropping Node 14 support
        if (cryptoLib === null || cryptoLib === void 0 ? void 0 : cryptoLib.subtle) {
            const enc = new TextEncoder();
            const key = yield cryptoLib.subtle.importKey('raw', enc.encode(secret), {
                name: 'HMAC',
                hash: { name: 'SHA-256' },
            }, false, ['sign']);
            const signature = yield cryptoLib.subtle.sign('HMAC', key, enc.encode(payload));
            return returnFormat === types_1.HashFormat.Base64
                ? asBase64(signature)
                : asHex(signature);
        }
        return cryptoLib
            .createHmac('sha256', secret)
            .update(payload)
            .digest(returnFormat);
    });
}
exports.createSHA256HMAC = createSHA256HMAC;
function asHex(buffer) {
    return [...new Uint8Array(buffer)]
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');
}
exports.asHex = asHex;
const LookupTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function asBase64(buffer) {
    let output = '';
    const input = new Uint8Array(buffer);
    for (let i = 0; i < input.length;) {
        const byte1 = input[i++];
        const byte2 = input[i++];
        const byte3 = input[i++];
        const enc1 = byte1 >> 2;
        const enc2 = ((byte1 & 0b00000011) << 4) | (byte2 >> 4);
        let enc3 = ((byte2 & 0b00001111) << 2) | (byte3 >> 6);
        let enc4 = byte3 & 0b00111111;
        if (isNaN(byte2)) {
            enc3 = 64;
        }
        if (isNaN(byte3)) {
            enc4 = 64;
        }
        output +=
            LookupTable[enc1] +
                LookupTable[enc2] +
                LookupTable[enc3] +
                LookupTable[enc4];
    }
    return output;
}
exports.asBase64 = asBase64;
function hashString(str, returnFormat) {
    const buffer = new TextEncoder().encode(str);
    switch (returnFormat) {
        case types_1.HashFormat.Base64:
            return asBase64(buffer);
        case types_1.HashFormat.Hex:
            return asHex(buffer);
        default:
            throw new error_1.ShopifyError(`Unrecognized hash format '${returnFormat}'`);
    }
}
exports.hashString = hashString;
//# sourceMappingURL=utils.js.map