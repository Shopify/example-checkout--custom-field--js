"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeHost = exports.sanitizeShop = void 0;
const error_1 = require("../error");
const decode_host_1 = require("../auth/decode-host");
function sanitizeShop(config) {
    return (shop, throwOnInvalid = false) => {
        const domainsRegex = ['myshopify\\.com', 'shopify\\.com', 'myshopify\\.io'];
        if (config.customShopDomains) {
            domainsRegex.push(...config.customShopDomains.map((regex) => typeof regex === 'string' ? regex : regex.source));
        }
        const shopUrlRegex = new RegExp(`^[a-zA-Z0-9][a-zA-Z0-9-_]*\\.(${domainsRegex.join('|')})[/]*$`);
        const sanitizedShop = shopUrlRegex.test(shop) ? shop : null;
        if (!sanitizedShop && throwOnInvalid) {
            throw new error_1.InvalidShopError('Received invalid shop argument');
        }
        return sanitizedShop;
    };
}
exports.sanitizeShop = sanitizeShop;
function sanitizeHost(config) {
    return (host, throwOnInvalid = false) => {
        const base64regex = /^[0-9a-zA-Z+/]+={0,2}$/;
        let sanitizedHost = base64regex.test(host) ? host : null;
        if (sanitizedHost) {
            const url = new URL(`https://${(0, decode_host_1.decodeHost)(sanitizedHost)}`);
            if (!sanitizeShop(config)(url.hostname, false)) {
                sanitizedHost = null;
            }
        }
        if (!sanitizedHost && throwOnInvalid) {
            throw new error_1.InvalidHostError('Received invalid host argument');
        }
        return sanitizedHost;
    };
}
exports.sanitizeHost = sanitizeHost;
//# sourceMappingURL=shop-validator.js.map