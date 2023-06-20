"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildEmbeddedAppUrl = exports.getEmbeddedAppUrl = void 0;
const tslib_1 = require("tslib");
const ShopifyErrors = tslib_1.__importStar(require("../error"));
const http_1 = require("../../runtime/http");
const shop_validator_1 = require("../utils/shop-validator");
const decode_host_1 = require("./decode-host");
function getEmbeddedAppUrl(config) {
    return (_a) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        var adapterArgs = tslib_1.__rest(_a, []);
        const request = yield (0, http_1.abstractConvertRequest)(adapterArgs);
        if (!request) {
            throw new ShopifyErrors.MissingRequiredArgument('getEmbeddedAppUrl requires a request object argument');
        }
        if (!request.url) {
            throw new ShopifyErrors.InvalidRequestError('Request does not contain a URL');
        }
        const url = new URL(request.url, `https://${request.headers.host}`);
        const host = url.searchParams.get('host');
        if (typeof host !== 'string') {
            throw new ShopifyErrors.InvalidRequestError('Request does not contain a host query parameter');
        }
        return buildEmbeddedAppUrl(config)(host);
    });
}
exports.getEmbeddedAppUrl = getEmbeddedAppUrl;
function buildEmbeddedAppUrl(config) {
    return (host) => {
        (0, shop_validator_1.sanitizeHost)(config)(host, true);
        const decodedHost = (0, decode_host_1.decodeHost)(host);
        return `https://${decodedHost}/apps/${config.apiKey}`;
    };
}
exports.buildEmbeddedAppUrl = buildEmbeddedAppUrl;
//# sourceMappingURL=get-embedded-app-url.js.map