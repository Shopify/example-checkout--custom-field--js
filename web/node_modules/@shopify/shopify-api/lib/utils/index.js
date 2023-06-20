"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopifyUtils = void 0;
const shop_validator_1 = require("./shop-validator");
const hmac_validator_1 = require("./hmac-validator");
const version_compatible_1 = require("./version-compatible");
function shopifyUtils(config) {
    return {
        sanitizeShop: (0, shop_validator_1.sanitizeShop)(config),
        sanitizeHost: (0, shop_validator_1.sanitizeHost)(config),
        validateHmac: (0, hmac_validator_1.validateHmac)(config),
        versionCompatible: (0, version_compatible_1.versionCompatible)(config),
    };
}
exports.shopifyUtils = shopifyUtils;
//# sourceMappingURL=index.js.map