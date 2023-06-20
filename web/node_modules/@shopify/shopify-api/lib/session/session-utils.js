"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customAppSession = exports.getCurrentSessionId = exports.getOfflineId = exports.getJwtSessionId = void 0;
const tslib_1 = require("tslib");
const types_1 = require("../auth/oauth/types");
const http_1 = require("../../runtime/http");
const shop_validator_1 = require("../utils/shop-validator");
const logger_1 = require("../logger");
const ShopifyErrors = tslib_1.__importStar(require("../error"));
const decode_session_token_1 = require("./decode-session-token");
const session_1 = require("./session");
function getJwtSessionId(config) {
    return (shop, userId) => {
        return `${(0, shop_validator_1.sanitizeShop)(config)(shop, true)}_${userId}`;
    };
}
exports.getJwtSessionId = getJwtSessionId;
function getOfflineId(config) {
    return (shop) => {
        return `offline_${(0, shop_validator_1.sanitizeShop)(config)(shop, true)}`;
    };
}
exports.getOfflineId = getOfflineId;
function getCurrentSessionId(config) {
    return function getCurrentSessionId(_a) {
        var { isOnline } = _a, adapterArgs = tslib_1.__rest(_a, ["isOnline"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const request = yield (0, http_1.abstractConvertRequest)(adapterArgs);
            const log = (0, logger_1.logger)(config);
            if (config.isEmbeddedApp) {
                log.debug('App is embedded, looking for session id in JWT payload', {
                    isOnline,
                });
                const authHeader = request.headers.Authorization;
                if (authHeader) {
                    const matches = (typeof authHeader === 'string' ? authHeader : authHeader[0]).match(/^Bearer (.+)$/);
                    if (!matches) {
                        log.error('Missing Bearer token in authorization header', { isOnline });
                        throw new ShopifyErrors.MissingJwtTokenError('Missing Bearer token in authorization header');
                    }
                    const jwtPayload = yield (0, decode_session_token_1.decodeSessionToken)(config)(matches[1]);
                    const shop = jwtPayload.dest.replace(/^https:\/\//, '');
                    log.debug('Found valid JWT payload', { shop, isOnline });
                    if (isOnline) {
                        return getJwtSessionId(config)(shop, jwtPayload.sub);
                    }
                    else {
                        return getOfflineId(config)(shop);
                    }
                }
                else {
                    log.error('Missing Authorization header, was the request made with authenticatedFetch?', { isOnline });
                }
            }
            else {
                log.debug('App is not embedded, looking for session id in cookies', {
                    isOnline,
                });
                const cookies = new http_1.Cookies(request, {}, {
                    keys: [config.apiSecretKey],
                });
                return cookies.getAndVerify(types_1.SESSION_COOKIE_NAME);
            }
            return undefined;
        });
    };
}
exports.getCurrentSessionId = getCurrentSessionId;
function customAppSession(config) {
    return (shop) => {
        return new session_1.Session({
            id: '',
            shop: `${(0, shop_validator_1.sanitizeShop)(config)(shop, true)}`,
            state: '',
            isOnline: false,
        });
    };
}
exports.customAppSession = customAppSession;
//# sourceMappingURL=session-utils.js.map