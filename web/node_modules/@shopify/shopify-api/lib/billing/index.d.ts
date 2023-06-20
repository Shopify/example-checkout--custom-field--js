import { ConfigInterface } from '../base-types';
export declare function shopifyBilling(config: ConfigInterface): {
    check: ({ session, plans, isTest, }: import("./types").CheckParams) => Promise<boolean>;
    request: ({ session, plan, isTest, }: import("./types").RequestParams) => Promise<string>;
};
export declare type ShopifyBilling = ReturnType<typeof shopifyBilling>;
//# sourceMappingURL=index.d.ts.map