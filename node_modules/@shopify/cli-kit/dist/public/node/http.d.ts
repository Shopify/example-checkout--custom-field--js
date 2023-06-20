import FormData from 'form-data';
import nodeFetch, { RequestInfo, RequestInit } from 'node-fetch';
export { FetchError } from 'node-fetch';
/**
 * Create a new FormData object.
 *
 * @returns A FormData object.
 */
export declare function formData(): FormData;
export type Response = ReturnType<typeof nodeFetch>;
/**
 * An interface that abstracts way node-fetch. When Node has built-in
 * support for "fetch" in the standard library, we can drop the node-fetch
 * dependency from here.
 * Note that we are exposing types from "node-fetch". The reason being is that
 * they are consistent with the Web API so if we drop node-fetch in the future
 * it won't require changes from the callers.
 *
 * @param url - This defines the resource that you wish to fetch.
 * @param init - An object containing any custom settings that you want to apply to the request.
 * @returns A promise that resolves with the response.
 */
export declare function fetch(url: RequestInfo, init?: RequestInit): Response;
/**
 * A fetch function to use with Shopify services. The function ensures the right
 * TLS configuragion is used based on the environment in which the service is running
 * (e.g. Spin).
 *
 * @param url - This defines the resource that you wish to fetch.
 * @param init - An object containing any custom settings that you want to apply to the request.
 * @returns A promise that resolves with the response.
 */
export declare function shopifyFetch(url: RequestInfo, init?: RequestInit): Response;
/**
 * Download a file from a URL to a local path.
 *
 * @param url - The URL to download from.
 * @param to - The local path to download to.
 * @returns - A promise that resolves with the local path.
 */
export declare function downloadFile(url: string, to: string): Promise<string>;
