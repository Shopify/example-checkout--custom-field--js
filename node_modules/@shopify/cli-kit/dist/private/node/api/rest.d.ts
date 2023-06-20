import { AdminSession } from '@shopify/cli-kit/node/session';
export declare function restRequestBody<T>(requestBody?: T): string | undefined;
export declare function restRequestUrl(session: AdminSession, apiVersion: string, path: string, searchParams?: {
    [name: string]: string;
}): string;
export declare function restRequestHeaders(session: AdminSession): {
    [key: string]: string;
};
