import { ShopifyRestResources } from '../rest/types';
import { DeprecatedV5Types } from './deprecated-v5-types';
import { ConfigParams, ConfigInterface } from './base-types';
import { ShopifyClients } from './clients';
import { ShopifyAuth } from './auth';
import { ShopifySession } from './session';
import { ShopifyUtils } from './utils';
import { ShopifyWebhooks } from './webhooks';
import { ShopifyBilling } from './billing';
import { ShopifyLogger } from './logger';
export * from './error';
export * from './session/classes';
export * from '../rest/types';
export * from './types';
export * from './base-types';
export * from './auth/types';
export * from './clients/types';
export * from './session/types';
export * from './webhooks/types';
export declare const Shopify: DeprecatedV5Types;
export interface Shopify<T extends ShopifyRestResources = ShopifyRestResources> {
    config: ConfigInterface;
    clients: ShopifyClients;
    auth: ShopifyAuth;
    session: ShopifySession;
    utils: ShopifyUtils;
    webhooks: ShopifyWebhooks;
    billing: ShopifyBilling;
    logger: ShopifyLogger;
    rest: T;
}
export declare function shopifyApi<T extends ShopifyRestResources>(config: ConfigParams<T>): Shopify<T>;
//# sourceMappingURL=index.d.ts.map