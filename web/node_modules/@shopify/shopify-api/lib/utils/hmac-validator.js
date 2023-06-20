"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentTimeInSec = exports.validateHmac = exports.generateLocalHmac = void 0;
const tslib_1 = require("tslib");
const crypto_1 = require("../../runtime/crypto");
const types_1 = require("../../runtime/crypto/types");
const ShopifyErrors = tslib_1.__importStar(require("../error"));
const safe_compare_1 = require("../auth/oauth/safe-compare");
const processed_query_1 = tslib_1.__importDefault(require("./processed-query"));
const HMAC_TIMESTAMP_PERMITTED_CLOCK_TOLERANCE_SEC = 90;
function stringifyQuery(query) {
    const processedQuery = new processed_query_1.default();
    Object.keys(query)
        .sort((val1, val2) => val1.localeCompare(val2))
        .forEach((key) => processedQuery.put(key, query[key]));
    return processedQuery.stringify(true);
}
function generateLocalHmac(config) {
    return (params) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        // assumes that 'signature' (from Shopify) will only ever be a hmac value
        const { hmac, signature } = params, query = tslib_1.__rest(params, ["hmac", "signature"]);
        const queryString = stringifyQuery(query);
        return (0, crypto_1.createSHA256HMAC)(config.apiSecretKey, queryString, types_1.HashFormat.Hex);
    });
}
exports.generateLocalHmac = generateLocalHmac;
function validateHmac(config) {
    return (query) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!query.hmac && !query.signature) {
            throw new ShopifyErrors.InvalidHmacError('Query does not contain an HMAC value.');
        }
        validateHmacTimestamp(query);
        const hmac = query.signature || query.hmac;
        const localHmac = yield generateLocalHmac(config)(query);
        return (0, safe_compare_1.safeCompare)(hmac, localHmac);
    });
}
exports.validateHmac = validateHmac;
function getCurrentTimeInSec() {
    return Math.trunc(Date.now() / 1000);
}
exports.getCurrentTimeInSec = getCurrentTimeInSec;
function validateHmacTimestamp(query) {
    if (Math.abs(getCurrentTimeInSec() - Number(query.timestamp)) >
        HMAC_TIMESTAMP_PERMITTED_CLOCK_TOLERANCE_SEC) {
        throw new ShopifyErrors.InvalidHmacError('HMAC timestamp is outside of the tolerance range');
    }
}
//# sourceMappingURL=hmac-validator.js.map