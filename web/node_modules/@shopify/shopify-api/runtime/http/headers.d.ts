import type { Headers } from './types';
export declare function canonicalizeHeaderName(hdr: string): string;
export declare function getHeaders(headers: Headers | undefined, needle_: string): string[];
export declare function getHeader(headers: Headers | undefined, needle: string): string | undefined;
export declare function setHeader(headers: Headers, key: string, value: string): void;
export declare function addHeader(headers: Headers, key: string, value: string): void;
export declare function canonicalizeHeaders(hdr: Headers): Headers;
export declare function removeHeader(headers: Headers, needle: string): void;
export declare function flatHeaders(headers: Headers): [string, string][];
//# sourceMappingURL=headers.d.ts.map