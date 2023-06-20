"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookies = void 0;
const tslib_1 = require("tslib");
// import type {Headers} from "./headers";
const utils_1 = require("../crypto/utils");
const utils_2 = require("./utils");
const headers_1 = require("./headers");
class Cookies {
    constructor(request, response, { keys = [] } = {}) {
        var _a, _b;
        this.response = response;
        this.receivedCookieJar = {};
        this.outgoingCookieJar = {};
        this.keys = [];
        if (keys)
            this.keys = keys;
        const cookieReqHdr = (_a = (0, headers_1.getHeader)(request.headers, 'Cookie')) !== null && _a !== void 0 ? _a : '';
        this.receivedCookieJar = Cookies.parseCookies(cookieReqHdr.split(';'));
        const cookieResHdr = (_b = (0, headers_1.getHeaders)(response.headers, 'Set-Cookie')) !== null && _b !== void 0 ? _b : [];
        this.outgoingCookieJar = Cookies.parseCookies(cookieResHdr);
    }
    static parseCookies(hdrs) {
        const entries = hdrs
            .filter((hdr) => hdr.trim().length > 0)
            .map((cookieDef) => {
            const [keyval, ...opts] = cookieDef.split(';');
            const [name, value] = (0, utils_2.splitN)(keyval, '=', 2).map((value) => value.trim());
            return [
                name,
                Object.assign({ name,
                    value }, Object.fromEntries(opts.map((opt) => (0, utils_2.splitN)(opt, '=', 2).map((value) => value.trim())))),
            ];
        });
        const jar = Object.fromEntries(entries);
        for (const cookie of Object.values(jar)) {
            if (typeof cookie.expires === 'string') {
                cookie.expires = new Date(cookie.expires);
            }
        }
        return jar;
    }
    static encodeCookie(data) {
        let result = '';
        result += `${data.name}=${data.value};`;
        result += Object.entries(data)
            .filter(([key]) => !['name', 'value', 'expires'].includes(key))
            .map(([key, value]) => `${key}=${value}`)
            .join('; ');
        if (data.expires) {
            result += ';';
            result += `expires=${data.expires.toUTCString()}`;
        }
        return result;
    }
    toHeaders() {
        return Object.values(this.outgoingCookieJar).map((cookie) => Cookies.encodeCookie(cookie));
    }
    updateHeader() {
        if (!this.response.headers) {
            this.response.headers = {};
        }
        (0, headers_1.removeHeader)(this.response.headers, 'Set-Cookie');
        this.toHeaders().map((hdr) => (0, headers_1.addHeader)(this.response.headers, 'Set-Cookie', hdr));
    }
    get(name) {
        var _a;
        return (_a = this.receivedCookieJar[name]) === null || _a === void 0 ? void 0 : _a.value;
    }
    deleteCookie(name) {
        this.set(name, '', {
            path: '/',
            expires: new Date(0),
        });
    }
    getAndVerify(name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const value = this.get(name);
            if (!value)
                return undefined;
            if (!(yield this.isSignedCookieValid(name))) {
                return undefined;
            }
            return value;
        });
    }
    get canSign() {
        var _a;
        return ((_a = this.keys) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    set(name, value, opts = {}) {
        this.outgoingCookieJar[name] = Object.assign(Object.assign({}, opts), { name,
            value });
        this.updateHeader();
    }
    setAndSign(name, value, opts = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.canSign) {
                throw Error('No keys provided for signing.');
            }
            this.set(name, value, opts);
            const sigName = `${name}.sig`;
            const signature = yield (0, utils_1.createSHA256HMAC)(this.keys[0], value);
            this.set(sigName, signature, opts);
            this.updateHeader();
        });
    }
    isSignedCookieValid(cookieName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const signedCookieName = `${cookieName}.sig`;
            // No cookie or no signature cookie makes the cookie it invalid.
            if (!this.get(cookieName) || !this.get(signedCookieName)) {
                this.deleteCookie(signedCookieName);
                this.deleteCookie(cookieName);
                return false;
            }
            const value = this.get(cookieName);
            const signature = this.get(signedCookieName);
            const allCheckSignatures = yield Promise.all(this.keys.map((key) => (0, utils_1.createSHA256HMAC)(key, value)));
            if (!allCheckSignatures.includes(signature)) {
                this.deleteCookie(signedCookieName);
                this.deleteCookie(cookieName);
                return false;
            }
            return true;
        });
    }
}
exports.Cookies = Cookies;
//# sourceMappingURL=cookies.js.map