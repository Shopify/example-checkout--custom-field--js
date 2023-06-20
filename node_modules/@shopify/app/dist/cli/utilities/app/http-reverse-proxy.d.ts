/// <reference types="node" resolution-mode="require"/>
import { AbortSignal } from '@shopify/cli-kit/node/abort';
import { OutputProcess } from '@shopify/cli-kit/node/output';
import { Writable } from 'stream';
export interface ReverseHTTPProxyTarget {
    /** The prefix to include in the logs
     *   [vite] Output coming from Vite
     */
    logPrefix: string;
    /**
     * The port to use for the target HTTP server. When undefined, a random port is automatically assigned.
     */
    customPort?: number;
    /**
     * The HTTP path prefix used to match against request and determine if the traffic should be
     * forwarded to this target
     */
    pathPrefix?: string;
    /**
     * A callback to invoke the process. stdout and stderr should be used
     * to send standard output and error data that gets formatted with the
     * right prefix.
     */
    action: (stdout: Writable, stderr: Writable, signal: AbortSignal, port: number) => Promise<void> | void;
}
interface Options {
    previewUrl: string | undefined;
    portNumber: number;
    proxyTargets: ReverseHTTPProxyTarget[];
    additionalProcesses: OutputProcess[];
}
/**
 * A convenient function that runs an HTTP server and does path-based traffic forwarding to sub-processes that run
 * an HTTP server. The method assigns a random port to each of the processes.
 * @param tunnelUrl - The URL of the tunnel.
 * @param portNumber - The port to use for the proxy HTTP server. When undefined, a random port is automatically assigned.
 * @param proxyTargets - List of target processes to forward traffic to.
 * @param additionalProcesses - Additional processes to run. The proxy won't forward traffic to these processes.
 * @returns A promise that resolves with an interface to get the port of the proxy and stop it.
 */
export declare function runConcurrentHTTPProcessesAndPathForwardTraffic({ previewUrl, portNumber, proxyTargets, additionalProcesses, }: Options): Promise<void>;
export {};
