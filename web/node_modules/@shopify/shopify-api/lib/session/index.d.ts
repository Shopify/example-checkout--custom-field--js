import { ConfigInterface } from '../base-types';
export declare function shopifySession(config: ConfigInterface): {
    customAppSession: (shop: string) => import("./session").Session;
    getCurrentId: ({ isOnline, ...adapterArgs }: import("./types").GetCurrentSessionIdParams) => Promise<string | undefined>;
    getOfflineId: (shop: string) => string;
    decodeSessionToken: (token: string) => Promise<import("./types").JwtPayload>;
};
export declare type ShopifySession = ReturnType<typeof shopifySession>;
//# sourceMappingURL=index.d.ts.map