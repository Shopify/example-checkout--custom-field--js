"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSessionToken = void 0;
const tslib_1 = require("tslib");
const jose = tslib_1.__importStar(require("jose"));
const ShopifyErrors = tslib_1.__importStar(require("../error"));
const get_hmac_key_1 = require("../utils/get-hmac-key");
const JWT_PERMITTED_CLOCK_TOLERANCE = 10;
function decodeSessionToken(config) {
    return (token) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        let payload;
        try {
            payload = (yield jose.jwtVerify(token, (0, get_hmac_key_1.getHMACKey)(config.apiSecretKey), {
                algorithms: ['HS256'],
                clockTolerance: JWT_PERMITTED_CLOCK_TOLERANCE,
            })).payload;
        }
        catch (error) {
            throw new ShopifyErrors.InvalidJwtError(`Failed to parse session token '${token}': ${error.message}`);
        }
        // The exp and nbf fields are validated by the JWT library
        if (payload.aud !== config.apiKey) {
            throw new ShopifyErrors.InvalidJwtError('Session token had invalid API key');
        }
        return payload;
    });
}
exports.decodeSessionToken = decodeSessionToken;
//# sourceMappingURL=decode-session-token.js.map