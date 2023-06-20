import { getCartPathFromExtensions } from './extension/utilities.js';
import { setupWebsocketConnection } from './extension/websocket.js';
import { setupBundlerAndFileWatcher } from './extension/bundler.js';
import { setupHTTPServer } from './extension/server.js';
import { ExtensionsPayloadStore, getExtensionsPayloadStoreRawPayload } from './extension/payload/store.js';
import { outputDebug } from '@shopify/cli-kit/node/output';
export async function devUIExtensions(options) {
    const devOptions = {
        ...options,
        checkoutCartUrl: await getCartPathFromExtensions(options.extensions, options.storeFqdn, options.checkoutCartUrl),
    };
    const payloadStoreOptions = {
        ...devOptions,
        websocketURL: getWebSocketUrl(options.url),
    };
    const payloadStoreRawPayload = await getExtensionsPayloadStoreRawPayload(payloadStoreOptions);
    const payloadStore = new ExtensionsPayloadStore(payloadStoreRawPayload, payloadStoreOptions);
    outputDebug(`Setting up the UI extensions HTTP server...`, options.stdout);
    const httpServer = setupHTTPServer({ devOptions, payloadStore });
    outputDebug(`Setting up the UI extensions Websocket server...`, options.stdout);
    const websocketConnection = setupWebsocketConnection({ ...options, httpServer, payloadStore });
    outputDebug(`Setting up the UI extensions bundler and file watching...`, options.stdout);
    const fileWatcher = await setupBundlerAndFileWatcher({ devOptions, payloadStore });
    options.signal.addEventListener('abort', () => {
        fileWatcher.close();
        websocketConnection.close();
        httpServer.close();
    });
}
function getWebSocketUrl(url) {
    const websocketURL = new URL('/extensions', url);
    websocketURL.protocol = 'wss:';
    return websocketURL.toString();
}
//# sourceMappingURL=extension.js.map