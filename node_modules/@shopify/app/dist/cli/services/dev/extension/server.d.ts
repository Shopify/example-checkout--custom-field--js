/// <reference types="node" resolution-mode="require"/>
import { ExtensionsPayloadStore } from './payload/store.js';
import { ExtensionDevOptions } from '../extension.js';
interface SetupHTTPServerOptions {
    devOptions: ExtensionDevOptions;
    payloadStore: ExtensionsPayloadStore;
}
export declare function setupHTTPServer(options: SetupHTTPServerOptions): import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
export {};
