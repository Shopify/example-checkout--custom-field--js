import { ConfigInterface } from '../base-types';
export declare function shopifyUtils(config: ConfigInterface): {
    sanitizeShop: (shop: string, throwOnInvalid?: boolean) => string | null;
    sanitizeHost: (host: string, throwOnInvalid?: boolean) => string | null;
    validateHmac: (query: import("..").AuthQuery) => Promise<boolean>;
    versionCompatible: (referenceVersion: import("..").ApiVersion, currentVersion?: import("..").ApiVersion) => boolean;
};
export declare type ShopifyUtils = ReturnType<typeof shopifyUtils>;
//# sourceMappingURL=index.d.ts.map