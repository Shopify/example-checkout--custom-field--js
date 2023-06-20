import { ConfigInterface } from '../base-types';
import { nonce } from './oauth/nonce';
import { safeCompare } from './oauth/safe-compare';
export declare function shopifyAuth(config: ConfigInterface): {
    begin: ({ shop, callbackPath, isOnline, ...adapterArgs }: import("./types").BeginParams) => Promise<any>;
    callback: <T = any>({ ...adapterArgs }: import("./types").CallbackParams) => Promise<import("./oauth/oauth").CallbackResponse<T>>;
    nonce: typeof nonce;
    safeCompare: typeof safeCompare;
    getEmbeddedAppUrl: ({ ...adapterArgs }: import("./types").GetEmbeddedAppUrlParams) => Promise<string>;
    buildEmbeddedAppUrl: (host: string) => string;
};
export declare type ShopifyAuth = ReturnType<typeof shopifyAuth>;
//# sourceMappingURL=index.d.ts.map