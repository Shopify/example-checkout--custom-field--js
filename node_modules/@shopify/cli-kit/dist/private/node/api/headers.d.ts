/// <reference types="node" resolution-mode="require"/>
import { ExtendableError } from '../../../public/node/error.js';
import https from 'https';
export declare class RequestClientError extends ExtendableError {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
/**
 * Removes the sensitive data from the headers and outputs them as a string.
 * @param headers - HTTP headers.
 * @returns A sanitized version of the headers as a string.
 */
export declare function sanitizedHeadersOutput(headers: {
    [key: string]: string;
}): string;
export declare function buildHeaders(token?: string): {
    [key: string]: string;
};
/**
 * This utility function returns the https.Agent to use for a given service. The agent
 * includes the right configuration based on the service's environment. For example,
 * if the service is running in a Spin environment, the attribute "rejectUnauthorized" is
 * set to false
 */
export declare function httpsAgent(): Promise<https.Agent>;
