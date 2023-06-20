import { ConfigInterface } from '../base-types';
export declare function clientClasses(config: ConfigInterface): {
    Rest: typeof import("./rest/rest_client").RestClient;
    Graphql: typeof import("./graphql/graphql_client").GraphqlClient;
    Storefront: typeof import("./graphql/storefront_client").StorefrontClient;
    graphqlProxy: ({ session, rawBody, }: import("./types").GraphqlProxyParams) => Promise<import("./types").RequestReturn<unknown>>;
};
export declare type ShopifyClients = ReturnType<typeof clientClasses>;
//# sourceMappingURL=index.d.ts.map