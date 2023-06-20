import { HashFormat } from './types';
export declare function createSHA256HMAC(secret: string, payload: string, returnFormat?: HashFormat): Promise<string>;
export declare function asHex(buffer: ArrayBuffer): string;
export declare function asBase64(buffer: ArrayBuffer): string;
export declare function hashString(str: string, returnFormat: HashFormat): string;
//# sourceMappingURL=utils.d.ts.map