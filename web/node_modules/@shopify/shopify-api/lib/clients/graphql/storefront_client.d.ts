import { HeaderParams } from '../http_client/types';
import { GraphqlClient, GraphqlClientClassParams } from './graphql_client';
import { StorefrontClientParams } from './types';
export declare class StorefrontClient extends GraphqlClient {
    baseApiPath: string;
    readonly domain: string;
    readonly storefrontAccessToken: string;
    constructor(params: StorefrontClientParams);
    protected getApiHeaders(): HeaderParams;
    private storefrontClass;
}
export declare function storefrontClientClass(params: GraphqlClientClassParams): typeof StorefrontClient;
//# sourceMappingURL=storefront_client.d.ts.map