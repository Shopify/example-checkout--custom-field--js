import { getUIExtensionResourceURL } from '../../../../utilities/extensions/configuration.js';
import { getExtensionPointTargetSurface } from '../utilities.js';
import { createError, sendError as h3SendError } from 'h3';
export function getRedirectUrl(extension, options) {
    const { url: resourceUrl } = getUIExtensionResourceURL(extension.configuration.type, options);
    if (extension.surface === 'checkout' && resourceUrl) {
        const rawUrl = new URL(`https://${options.storeFqdn}/`);
        rawUrl.pathname = resourceUrl;
        rawUrl.searchParams.append('dev', `${options.url}/extensions`);
        return rawUrl.toString();
    }
    else if (extension.surface === 'customer_accounts') {
        const [storeName, ...storeDomainParts] = options.storeFqdn.split('.');
        const accountsUrl = `${storeName}.account.${storeDomainParts.join('.')}`;
        const origin = `${options.url}/extensions`;
        const rawUrl = new URL(`https://${accountsUrl}/extensions-development`);
        rawUrl.searchParams.append('origin', origin);
        rawUrl.searchParams.append('extensionId', extension.devUUID);
        return rawUrl.toString();
    }
    else {
        const rawUrl = new URL(`https://${options.storeFqdn}/`);
        rawUrl.pathname = 'admin/extensions-dev';
        rawUrl.searchParams.append('url', getExtensionUrl(extension, options));
        return rawUrl.toString();
    }
}
export function getExtensionPointRedirectUrl(requestedTarget, extension, options) {
    const surface = getExtensionPointTargetSurface(requestedTarget);
    const rawUrl = new URL(`https://${options.storeFqdn}/`);
    switch (surface) {
        case 'checkout':
            // This can never be null because we always generate it
            // whenever there is an extension point targeting Checkout
            rawUrl.pathname = options.checkoutCartUrl;
            rawUrl.searchParams.append('dev', `${options.url}/extensions`);
            break;
        case 'admin':
            rawUrl.pathname = 'admin/extensions-dev';
            rawUrl.searchParams.append('url', getExtensionUrl(extension, options));
            rawUrl.searchParams.append('target', requestedTarget);
            break;
        default:
            return undefined;
    }
    return rawUrl.toString();
}
export function getExtensionUrl(extension, options) {
    const extensionUrl = new URL(options.url);
    extensionUrl.pathname = `/extensions/${extension.devUUID}`;
    return extensionUrl.toString();
}
export function sendError(response, error) {
    h3SendError(response.event, createError(error));
}
//# sourceMappingURL=utilities.js.map