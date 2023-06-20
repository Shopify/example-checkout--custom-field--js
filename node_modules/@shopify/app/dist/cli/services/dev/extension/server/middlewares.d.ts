import { GetExtensionsMiddlewareOptions } from './models.js';
import { IncomingMessage, ServerResponse } from 'h3';
export declare function corsMiddleware(request: IncomingMessage, response: ServerResponse, next: (err?: Error) => unknown): void;
export declare function noCacheMiddleware(request: IncomingMessage, response: ServerResponse, next: (err?: Error) => unknown): void;
export declare function redirectToDevConsoleMiddleware(request: IncomingMessage, response: ServerResponse, next: (err?: Error) => unknown): Promise<void>;
export declare function fileServerMiddleware(request: IncomingMessage, response: ServerResponse, next: (err?: Error) => unknown, options: {
    filePath: string;
}): Promise<void>;
export declare function getExtensionAssetMiddleware({ devOptions }: GetExtensionsMiddlewareOptions): (request: IncomingMessage, response: ServerResponse, next: (err?: Error) => unknown) => Promise<void>;
export declare function getExtensionsPayloadMiddleware({ payloadStore }: GetExtensionsMiddlewareOptions): (request: IncomingMessage, response: ServerResponse, next: (err?: Error) => unknown) => Promise<void>;
export declare function devConsoleIndexMiddleware(request: IncomingMessage, response: ServerResponse, next: (err?: Error) => unknown): Promise<void>;
export declare function devConsoleAssetsMiddleware(request: IncomingMessage, response: ServerResponse, next: (err?: Error) => unknown): Promise<void>;
export declare function getLogMiddleware({ devOptions }: GetExtensionsMiddlewareOptions): (request: IncomingMessage, response: ServerResponse, next: (err?: Error) => unknown) => Promise<void>;
export declare function getExtensionPayloadMiddleware({ devOptions }: GetExtensionsMiddlewareOptions): (request: IncomingMessage, response: ServerResponse, next: (err?: Error) => unknown) => Promise<void>;
export declare function getExtensionPointMiddleware({ devOptions }: GetExtensionsMiddlewareOptions): (request: IncomingMessage, response: ServerResponse, _next: (err?: Error) => unknown) => Promise<void>;
