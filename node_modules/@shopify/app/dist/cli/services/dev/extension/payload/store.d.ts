/// <reference types="node" resolution-mode="require"/>
import { UIExtensionPayload, ExtensionsEndpointPayload } from './models.js';
import { ExtensionDevOptions } from '../../extension.js';
import { UIExtension } from '../../../../models/app/extensions.js';
import { EventEmitter } from 'events';
export interface ExtensionsPayloadStoreOptions extends ExtensionDevOptions {
    websocketURL: string;
}
export declare enum ExtensionsPayloadStoreEvent {
    Update = "PayloadUpdatedEvent:UPDATE"
}
export declare function getExtensionsPayloadStoreRawPayload(options: ExtensionsPayloadStoreOptions): Promise<ExtensionsEndpointPayload>;
export declare class ExtensionsPayloadStore extends EventEmitter {
    private options;
    private rawPayload;
    constructor(rawPayload: ExtensionsEndpointPayload, options: ExtensionsPayloadStoreOptions);
    getConnectedPayload(): {
        app: {
            apiKey: string;
            url: string;
            mobileUrl: string;
            title: string;
        };
        appId: string | undefined;
        store: string;
        extensions: UIExtensionPayload[];
    };
    getRawPayloadFilteredByExtensionIds(extensionIds: string[]): {
        extensions: UIExtensionPayload[];
        version: string;
        root: {
            url: string;
        };
        devConsole: {
            url: string;
        };
        socket: {
            url: string;
        };
        app: {
            apiKey: string;
            url: string;
            mobileUrl: string;
            title: string;
        };
        appId?: string | undefined;
        store: string;
    };
    getRawPayload(): ExtensionsEndpointPayload;
    updateApp(app: Partial<ExtensionsEndpointPayload> & {
        [key: string]: unknown;
    }): void;
    updateExtensions(extensions: UIExtensionPayload[]): void;
    updateExtension(extension: UIExtension, options: ExtensionDevOptions, development?: Partial<UIExtensionPayload['development']>): Promise<void>;
    private emitUpdate;
}
