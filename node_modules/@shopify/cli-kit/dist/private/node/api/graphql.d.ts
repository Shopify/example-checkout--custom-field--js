import { RequestDocument, Variables } from 'graphql-request';
export declare function debugLogRequestInfo<T>(api: string, query: RequestDocument, variables?: Variables, headers?: {
    [key: string]: string;
}): void;
export declare function errorHandler<T>(api: string): (error: unknown) => Error | unknown;
