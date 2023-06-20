import { ApiVersion } from '../../types';
import { ConfigInterface } from '../../base-types';
import { RequestParams } from '../http_client/types';
import { HttpClient } from '../http_client/http_client';
import { Session } from '../../session/session';
import { RestRequestReturn, RestClientParams } from './types';
export interface RestClientClassParams {
    config: ConfigInterface;
}
export declare class RestClient extends HttpClient {
    static LINK_HEADER_REGEXP: RegExp;
    static DEFAULT_LIMIT: string;
    static config: ConfigInterface;
    readonly session: Session;
    readonly apiVersion?: ApiVersion;
    constructor(params: RestClientParams);
    protected request<T = unknown>(params: RequestParams): Promise<RestRequestReturn<T>>;
    protected getRequestPath(path: string): string;
    private restClass;
    private buildRequestParams;
}
export declare function restClientClass(params: RestClientClassParams): typeof RestClient;
//# sourceMappingURL=rest_client.d.ts.map