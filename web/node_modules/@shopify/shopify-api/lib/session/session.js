"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const error_1 = require("../error");
const scopes_1 = require("../auth/scopes");
const propertiesToSave = [
    'id',
    'shop',
    'state',
    'isOnline',
    'scope',
    'accessToken',
    'expires',
    'onlineAccessInfo',
];
/**
 * Stores App information from logged in merchants so they can make authenticated requests to the Admin API.
 */
class Session {
    constructor(params) {
        Object.assign(this, params);
    }
    static fromPropertyArray(entries) {
        if (!Array.isArray(entries)) {
            throw new error_1.InvalidSession('The parameter is not an array: a Session cannot be created from this object.');
        }
        const obj = Object.fromEntries(entries
            .filter(([_key, value]) => value !== null && value !== undefined)
            // Sanitize keys
            .map(([key, value]) => {
            switch (key.toLowerCase()) {
                case 'isonline':
                    return ['isOnline', value];
                case 'accesstoken':
                    return ['accessToken', value];
                case 'onlineaccessinfo':
                    return ['onlineAccessInfo', value];
                default:
                    return [key.toLowerCase(), value];
            }
        })
            // Sanitize values
            .map(([key, value]) => {
            switch (key) {
                case 'isOnline':
                    if (typeof value === 'string') {
                        return [key, value.toString().toLowerCase() === 'true'];
                    }
                    else if (typeof value === 'number') {
                        return [key, Boolean(value)];
                    }
                    return [key, value];
                case 'scope':
                    return [key, value.toString()];
                case 'expires':
                    return [key, value ? new Date(Number(value)) : undefined];
                case 'onlineAccessInfo':
                    return [
                        key,
                        {
                            associated_user: {
                                id: Number(value),
                            },
                        },
                    ];
                default:
                    return [key, value];
            }
        }));
        Object.setPrototypeOf(obj, Session.prototype);
        return obj;
    }
    isActive(scopes) {
        const scopesObject = scopes instanceof scopes_1.AuthScopes ? scopes : new scopes_1.AuthScopes(scopes);
        const scopesUnchanged = scopesObject.equals(this.scope);
        if (scopesUnchanged &&
            this.accessToken &&
            (!this.expires || this.expires >= new Date())) {
            return true;
        }
        return false;
    }
    toObject() {
        const object = {
            id: this.id,
            shop: this.shop,
            state: this.state,
            isOnline: this.isOnline,
        };
        if (this.scope) {
            object.scope = this.scope;
        }
        if (this.expires) {
            object.expires = this.expires;
        }
        if (this.accessToken) {
            object.accessToken = this.accessToken;
        }
        if (this.onlineAccessInfo) {
            object.onlineAccessInfo = this.onlineAccessInfo;
        }
        return object;
    }
    equals(other) {
        if (!other)
            return false;
        const mandatoryPropsMatch = this.id === other.id &&
            this.shop === other.shop &&
            this.state === other.state &&
            this.isOnline === other.isOnline;
        if (!mandatoryPropsMatch)
            return false;
        const copyA = this.toPropertyArray();
        copyA.sort(([k1], [k2]) => (k1 < k2 ? -1 : 1));
        const copyB = other.toPropertyArray();
        copyB.sort(([k1], [k2]) => (k1 < k2 ? -1 : 1));
        return JSON.stringify(copyA) === JSON.stringify(copyB);
    }
    toPropertyArray() {
        return (Object.entries(this)
            .filter(([key, value]) => propertiesToSave.includes(key) &&
            value !== undefined &&
            value !== null)
            // Prepare values for db storage
            .map(([key, value]) => {
            var _a;
            switch (key) {
                case 'expires':
                    return [key, value ? value.getTime() : undefined];
                case 'onlineAccessInfo':
                    return [key, (_a = value === null || value === void 0 ? void 0 : value.associated_user) === null || _a === void 0 ? void 0 : _a.id];
                default:
                    return [key, value];
            }
        }));
    }
}
exports.Session = Session;
//# sourceMappingURL=session.js.map