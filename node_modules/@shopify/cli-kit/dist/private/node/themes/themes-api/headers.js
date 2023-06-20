import { tryParseInt } from '@shopify/cli-kit/common/string';
export function retryAfter(response) {
    const retryAfterStr = header(response, 'retry-after');
    const retryAfter = tryParseInt(retryAfterStr);
    if (!retryAfter) {
        return 0;
    }
    return retryAfter;
}
export function apiCallLimit(response) {
    const apiCallLimit = header(response, 'x-shopify-shop-api-call-limit');
    const [used, limit] = apiCallLimit
        .split('/')
        .map((num) => tryParseInt(num))
        .filter(Boolean);
    if (!used || !limit) {
        return;
    }
    return [used, limit];
}
function header(response, name) {
    const headers = response.headers;
    const header = headers[name];
    if (header?.length === 1) {
        return header[0] ?? '';
    }
    return '';
}
//# sourceMappingURL=headers.js.map