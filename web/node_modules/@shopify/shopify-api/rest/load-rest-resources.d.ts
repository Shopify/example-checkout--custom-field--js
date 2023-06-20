import { ConfigInterface } from '../lib/base-types';
import { RestClient } from '../lib/clients/rest/rest_client';
import { ShopifyRestResources } from './types';
export interface LoadRestResourcesParams {
    resources: ShopifyRestResources;
    config: ConfigInterface;
    RestClient: typeof RestClient;
}
export declare function loadRestResources({ resources, config, RestClient, }: LoadRestResourcesParams): ShopifyRestResources;
//# sourceMappingURL=load-rest-resources.d.ts.map