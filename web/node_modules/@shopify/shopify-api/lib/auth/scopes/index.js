"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthScopes = void 0;
class AuthScopes {
    constructor(scopes) {
        let scopesArray = [];
        if (typeof scopes === 'string') {
            scopesArray = scopes.split(new RegExp(`${AuthScopes.SCOPE_DELIMITER}\\s*`));
        }
        else if (scopes) {
            scopesArray = scopes;
        }
        scopesArray = scopesArray
            .map((scope) => scope.trim())
            .filter((scope) => scope.length);
        const impliedScopes = this.getImpliedScopes(scopesArray);
        const scopeSet = new Set(scopesArray);
        const impliedSet = new Set(impliedScopes);
        this.compressedScopes = new Set([...scopeSet].filter((x) => !impliedSet.has(x)));
        this.expandedScopes = new Set([...scopeSet, ...impliedSet]);
    }
    has(scope) {
        let other;
        if (scope instanceof AuthScopes) {
            other = scope;
        }
        else {
            other = new AuthScopes(scope);
        }
        return (other.toArray().filter((x) => !this.expandedScopes.has(x)).length === 0);
    }
    equals(otherScopes) {
        let other;
        if (otherScopes instanceof AuthScopes) {
            other = otherScopes;
        }
        else {
            other = new AuthScopes(otherScopes);
        }
        return (this.compressedScopes.size === other.compressedScopes.size &&
            this.toArray().filter((x) => !other.has(x)).length === 0);
    }
    toString() {
        return this.toArray().join(AuthScopes.SCOPE_DELIMITER);
    }
    toArray() {
        return [...this.compressedScopes];
    }
    getImpliedScopes(scopesArray) {
        return scopesArray.reduce((array, current) => {
            const matches = current.match(/^(unauthenticated_)?write_(.*)$/);
            if (matches) {
                array.push(`${matches[1] ? matches[1] : ''}read_${matches[2]}`);
            }
            return array;
        }, []);
    }
}
exports.AuthScopes = AuthScopes;
AuthScopes.SCOPE_DELIMITER = ',';
//# sourceMappingURL=index.js.map