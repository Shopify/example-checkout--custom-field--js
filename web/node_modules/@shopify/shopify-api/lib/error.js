"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureDeprecatedError = exports.BillingError = exports.InvalidRequestError = exports.UnsupportedClientType = exports.MissingRequiredArgument = exports.SessionStorageError = exports.InvalidWebhookError = exports.InvalidSession = exports.CookieNotFound = exports.InvalidOAuthError = exports.GraphqlQueryError = exports.RestResourceError = exports.HttpThrottlingError = exports.HttpInternalError = exports.HttpRetriableError = exports.HttpResponseError = exports.HttpMaxRetriesError = exports.HttpRequestError = exports.PrivateAppError = exports.SafeCompareError = exports.InvalidDeliveryMethodError = exports.MissingJwtTokenError = exports.InvalidJwtError = exports.InvalidHostError = exports.InvalidShopError = exports.InvalidHmacError = exports.ShopifyError = void 0;
const tslib_1 = require("tslib");
class ShopifyError extends Error {
    constructor(...args) {
        super(...args);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.ShopifyError = ShopifyError;
class InvalidHmacError extends ShopifyError {
}
exports.InvalidHmacError = InvalidHmacError;
class InvalidShopError extends ShopifyError {
}
exports.InvalidShopError = InvalidShopError;
class InvalidHostError extends ShopifyError {
}
exports.InvalidHostError = InvalidHostError;
class InvalidJwtError extends ShopifyError {
}
exports.InvalidJwtError = InvalidJwtError;
class MissingJwtTokenError extends ShopifyError {
}
exports.MissingJwtTokenError = MissingJwtTokenError;
class InvalidDeliveryMethodError extends ShopifyError {
}
exports.InvalidDeliveryMethodError = InvalidDeliveryMethodError;
class SafeCompareError extends ShopifyError {
}
exports.SafeCompareError = SafeCompareError;
class PrivateAppError extends ShopifyError {
}
exports.PrivateAppError = PrivateAppError;
class HttpRequestError extends ShopifyError {
}
exports.HttpRequestError = HttpRequestError;
class HttpMaxRetriesError extends ShopifyError {
}
exports.HttpMaxRetriesError = HttpMaxRetriesError;
class HttpResponseError extends ShopifyError {
    constructor({ message, code, statusText, body, headers, }) {
        super(message);
        this.response = {
            code,
            statusText,
            body,
            headers,
        };
    }
}
exports.HttpResponseError = HttpResponseError;
class HttpRetriableError extends HttpResponseError {
}
exports.HttpRetriableError = HttpRetriableError;
class HttpInternalError extends HttpRetriableError {
}
exports.HttpInternalError = HttpInternalError;
class HttpThrottlingError extends HttpRetriableError {
    constructor(_a) {
        var { retryAfter } = _a, params = tslib_1.__rest(_a, ["retryAfter"]);
        super(params);
        this.response.retryAfter = retryAfter;
    }
}
exports.HttpThrottlingError = HttpThrottlingError;
class RestResourceError extends ShopifyError {
}
exports.RestResourceError = RestResourceError;
class GraphqlQueryError extends ShopifyError {
    constructor({ message, response, headers, }) {
        super(message);
        this.response = response;
        this.headers = headers;
    }
}
exports.GraphqlQueryError = GraphqlQueryError;
class InvalidOAuthError extends ShopifyError {
}
exports.InvalidOAuthError = InvalidOAuthError;
class CookieNotFound extends ShopifyError {
}
exports.CookieNotFound = CookieNotFound;
class InvalidSession extends ShopifyError {
}
exports.InvalidSession = InvalidSession;
class InvalidWebhookError extends ShopifyError {
    constructor({ message, response }) {
        super(message);
        this.response = response;
    }
}
exports.InvalidWebhookError = InvalidWebhookError;
class SessionStorageError extends ShopifyError {
}
exports.SessionStorageError = SessionStorageError;
class MissingRequiredArgument extends ShopifyError {
}
exports.MissingRequiredArgument = MissingRequiredArgument;
class UnsupportedClientType extends ShopifyError {
}
exports.UnsupportedClientType = UnsupportedClientType;
class InvalidRequestError extends ShopifyError {
}
exports.InvalidRequestError = InvalidRequestError;
class BillingError extends ShopifyError {
    constructor({ message, errorData }) {
        super(message);
        this.message = message;
        this.errorData = errorData;
    }
}
exports.BillingError = BillingError;
class FeatureDeprecatedError extends ShopifyError {
}
exports.FeatureDeprecatedError = FeatureDeprecatedError;
//# sourceMappingURL=error.js.map