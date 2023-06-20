"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callback = exports.begin = void 0;
const tslib_1 = require("tslib");
const uuid_1 = require("uuid");
const processed_query_1 = tslib_1.__importDefault(require("../../utils/processed-query"));
const ShopifyErrors = tslib_1.__importStar(require("../../error"));
const hmac_validator_1 = require("../../utils/hmac-validator");
const shop_validator_1 = require("../../utils/shop-validator");
const session_1 = require("../../session/session");
const session_utils_1 = require("../../session/session-utils");
const http_client_1 = require("../../clients/http_client/http_client");
const types_1 = require("../../clients/http_client/types");
const http_1 = require("../../../runtime/http");
const logger_1 = require("../../logger");
const types_2 = require("./types");
const nonce_1 = require("./nonce");
const safe_compare_1 = require("./safe-compare");
function begin(config) {
    return (_a) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        var { shop, callbackPath, isOnline } = _a, adapterArgs = tslib_1.__rest(_a, ["shop", "callbackPath", "isOnline"]);
        throwIfCustomStoreApp(config.isCustomStoreApp, 'Cannot perform OAuth for private apps');
        const log = (0, logger_1.logger)(config);
        log.info('Beginning OAuth', { shop, isOnline, callbackPath });
        const cleanShop = (0, shop_validator_1.sanitizeShop)(config)(shop, true);
        const request = yield (0, http_1.abstractConvertRequest)(adapterArgs);
        const response = yield (0, http_1.abstractConvertIncomingResponse)(adapterArgs);
        const cookies = new http_1.Cookies(request, response, {
            keys: [config.apiSecretKey],
            secure: true,
        });
        const state = (0, nonce_1.nonce)();
        yield cookies.setAndSign(types_2.STATE_COOKIE_NAME, state, {
            expires: new Date(Date.now() + 60000),
            sameSite: 'lax',
            secure: true,
            path: callbackPath,
        });
        const query = {
            client_id: config.apiKey,
            scope: config.scopes.toString(),
            redirect_uri: `${config.hostScheme}://${config.hostName}${callbackPath}`,
            state,
            'grant_options[]': isOnline ? 'per-user' : '',
        };
        const processedQuery = new processed_query_1.default();
        processedQuery.putAll(query);
        const redirectUrl = `https://${cleanShop}/admin/oauth/authorize${processedQuery.stringify()}`;
        response.statusCode = 302;
        response.statusText = 'Found';
        response.headers = Object.assign(Object.assign(Object.assign({}, response.headers), cookies.response.headers), { Location: redirectUrl });
        log.debug(`OAuth started, redirecting to ${redirectUrl}`, { shop, isOnline });
        return (0, http_1.abstractConvertResponse)(response, adapterArgs);
    });
}
exports.begin = begin;
function callback(config) {
    return function callback(_a) {
        var adapterArgs = tslib_1.__rest(_a, []);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            throwIfCustomStoreApp(config.isCustomStoreApp, 'Cannot perform OAuth for private apps');
            const log = (0, logger_1.logger)(config);
            const request = yield (0, http_1.abstractConvertRequest)(adapterArgs);
            const query = new URL(request.url, `${config.hostScheme}://${config.hostName}`).searchParams;
            const shop = query.get('shop');
            log.info('Completing OAuth', { shop });
            const cookies = new http_1.Cookies(request, {}, {
                keys: [config.apiSecretKey],
                secure: true,
            });
            const stateFromCookie = yield cookies.getAndVerify(types_2.STATE_COOKIE_NAME);
            cookies.deleteCookie(types_2.STATE_COOKIE_NAME);
            if (!stateFromCookie) {
                log.error('Could not find OAuth cookie', { shop });
                throw new ShopifyErrors.CookieNotFound(`Cannot complete OAuth process. Could not find an OAuth cookie for shop url: ${shop}`);
            }
            const authQuery = Object.fromEntries(query.entries());
            if (!(yield validQuery({ config, query: authQuery, stateFromCookie }))) {
                log.error('Invalid OAuth callback', { shop, stateFromCookie });
                throw new ShopifyErrors.InvalidOAuthError('Invalid OAuth callback.');
            }
            log.debug('OAuth request is valid, requesting access token', { shop });
            const body = {
                client_id: config.apiKey,
                client_secret: config.apiSecretKey,
                code: query.get('code'),
            };
            const postParams = {
                path: '/admin/oauth/access_token',
                type: types_1.DataType.JSON,
                data: body,
            };
            const cleanShop = (0, shop_validator_1.sanitizeShop)(config)(query.get('shop'), true);
            const HttpClient = (0, http_client_1.httpClientClass)(config);
            const client = new HttpClient({ domain: cleanShop });
            const postResponse = yield client.post(postParams);
            const session = createSession({
                postResponse,
                shop: cleanShop,
                stateFromCookie,
                config,
            });
            if (!config.isEmbeddedApp) {
                yield cookies.setAndSign(types_2.SESSION_COOKIE_NAME, session.id, {
                    expires: session.expires,
                    sameSite: 'lax',
                    secure: true,
                    path: '/',
                });
            }
            return {
                headers: (yield (0, http_1.abstractConvertHeaders)(cookies.response.headers, adapterArgs)),
                session,
            };
        });
    };
}
exports.callback = callback;
function validQuery({ config, query, stateFromCookie, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return ((yield (0, hmac_validator_1.validateHmac)(config)(query)) &&
            (0, safe_compare_1.safeCompare)(query.state, stateFromCookie));
    });
}
function createSession({ config, postResponse, shop, stateFromCookie, }) {
    const associatedUser = postResponse.body
        .associated_user;
    const isOnline = Boolean(associatedUser);
    (0, logger_1.logger)(config).info('Creating new session', { shop, isOnline });
    if (isOnline) {
        let sessionId;
        const responseBody = postResponse.body;
        const { access_token, scope } = responseBody, rest = tslib_1.__rest(responseBody, ["access_token", "scope"]);
        const sessionExpiration = new Date(Date.now() + responseBody.expires_in * 1000);
        if (config.isEmbeddedApp) {
            sessionId = (0, session_utils_1.getJwtSessionId)(config)(shop, `${rest.associated_user.id}`);
        }
        else {
            sessionId = (0, uuid_1.v4)();
        }
        return new session_1.Session({
            id: sessionId,
            shop,
            state: stateFromCookie,
            isOnline,
            accessToken: access_token,
            scope,
            expires: sessionExpiration,
            onlineAccessInfo: rest,
        });
    }
    else {
        const responseBody = postResponse.body;
        return new session_1.Session({
            id: (0, session_utils_1.getOfflineId)(config)(shop),
            shop,
            state: stateFromCookie,
            isOnline,
            accessToken: responseBody.access_token,
            scope: responseBody.scope,
        });
    }
}
function throwIfCustomStoreApp(isCustomStoreApp, message) {
    if (isCustomStoreApp) {
        throw new ShopifyErrors.PrivateAppError(message);
    }
}
//# sourceMappingURL=oauth.js.map