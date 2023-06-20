import { ApiVersion } from '../../types';
import { ConfigInterface } from '../../base-types';
import { HttpClient } from '../http_client/http_client';
import { HeaderParams, RequestReturn } from '../http_client/types';
import { Session } from '../../session/session';
import { GraphqlParams, GraphqlClientParams } from './types';
export interface GraphqlClientClassParams {
    config: ConfigInterface;
    HttpClient?: typeof HttpClient;
}
export declare class GraphqlClient {
    static config: ConfigInterface;
    static HttpClient: typeof HttpClient;
    baseApiPath: string;
    readonly session: Session;
    readonly client: HttpClient;
    readonly apiVersion?: ApiVersion;
    constructor(params: GraphqlClientParams);
    query<T = unknown>(params: GraphqlParams): Promise<RequestReturn<T>>;
    protected getApiHeaders(): HeaderParams;
    private graphqlClass;
}
export declare function graphqlClientClass(params: GraphqlClientClassParams): typeof GraphqlClient;
//# sourceMappingURL=graphql_client.d.ts.map