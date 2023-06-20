export function buildAppURLForWeb(storeFqdn, publicURL) {
    const hostUrl = `${storeFqdn}/admin`;
    const hostParam = Buffer.from(hostUrl).toString('base64').replace(/[=]/g, '');
    return `${publicURL}?shop=${storeFqdn}&host=${hostParam}`;
}
export function buildAppURLForMobile(storeFqdn, apiKey) {
    const hostUrl = `${storeFqdn}/admin/apps/${apiKey}`;
    const hostParam = Buffer.from(hostUrl).toString('base64').replace(/[=]/g, '');
    return `https://${hostUrl}?shop=${storeFqdn}&host=${hostParam}`;
}
//# sourceMappingURL=app-url.js.map