import { buildHeaders } from './headers.js';
export function restRequestBody(requestBody) {
    if (!requestBody) {
        return;
    }
    return JSON.stringify(requestBody);
}
export function restRequestUrl(session, apiVersion, path, searchParams = {}) {
    const url = new URL(isThemeAccessSession(session)
        ? `https://theme-kit-access.shopifyapps.com/cli/admin/api/${apiVersion}${path}.json`
        : `https://${session.storeFqdn}/admin/api/${apiVersion}${path}.json`);
    Object.entries(searchParams).forEach(([name, value]) => url.searchParams.set(name, value));
    return url.toString();
}
export function restRequestHeaders(session) {
    const store = session.storeFqdn;
    const token = session.token;
    const headers = buildHeaders(session.token);
    if (isThemeAccessSession(session)) {
        headers['X-Shopify-Shop'] = store;
        headers['X-Shopify-Access-Token'] = token;
    }
    return headers;
}
function isThemeAccessSession(session) {
    return session.token.startsWith('shptka_');
}
//# sourceMappingURL=rest.js.map