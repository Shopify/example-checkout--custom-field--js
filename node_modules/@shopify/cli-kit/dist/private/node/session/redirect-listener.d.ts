/**
 * It represents the result of a redirect.
 */
type RedirectCallback = (error: Error | undefined, state: string | undefined, code: string | undefined) => void;
/**
 * Defines the interface of the options that
 * are used to instantiate a redirect listener.
 */
interface RedirectListenerOptions {
    host: string;
    port: number;
    callback: RedirectCallback;
}
/**
 * When the authentication completes, Identity redirects
 * the user to a URL. In the case of the CLI, the redirect
 * is to localhost passing some parameters that are necessary
 * to continue the authentication. Because of that, we need
 * an HTTP server that runs and listens to the request.
 */
export declare class RedirectListener {
    private static createServer;
    port: number;
    host: string;
    server: ReturnType<typeof RedirectListener.createServer>;
    constructor(options: RedirectListenerOptions);
    start(): void;
    stop(): Promise<void>;
}
export declare function listenRedirect(host: string, port: number, url: string): Promise<{
    code: string;
    state: string;
}>;
export {};
