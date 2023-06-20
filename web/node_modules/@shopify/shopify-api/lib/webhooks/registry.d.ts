import { ConfigInterface } from '../base-types';
import { AddHandlersParams, WebhookHandler, WebhookRegistry } from './types';
export declare function registry(): WebhookRegistry;
export declare function topicForStorage(topic: string): string;
export declare function addHandlers(config: ConfigInterface, webhookRegistry: WebhookRegistry): (handlersToAdd: AddHandlersParams) => void;
export declare function getTopicsAdded(webhookRegistry: WebhookRegistry): () => string[];
export declare function getHandlers(webhookRegistry: WebhookRegistry): (topic: string) => WebhookHandler[];
export declare function handlerIdentifier(config: ConfigInterface, handler: WebhookHandler): string;
export declare function addHostToCallbackUrl(config: ConfigInterface, callbackUrl: string): string;
//# sourceMappingURL=registry.d.ts.map