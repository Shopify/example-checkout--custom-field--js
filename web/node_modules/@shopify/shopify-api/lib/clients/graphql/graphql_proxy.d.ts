import { ConfigInterface } from '../../base-types';
import { RequestReturn } from '../http_client/types';
import { GraphqlProxyParams } from './types';
export declare function graphqlProxy(config: ConfigInterface): ({ session, rawBody, }: GraphqlProxyParams) => Promise<RequestReturn>;
//# sourceMappingURL=graphql_proxy.d.ts.map