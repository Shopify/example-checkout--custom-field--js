import { ConfigInterface } from '../../base-types';
import { DeleteRequestParams, GetRequestParams, PostRequestParams, PutRequestParams, RequestParams, RequestReturn } from './types';
interface HttpClientParams {
    domain: string;
}
export declare class HttpClient {
    static config: ConfigInterface;
    static scheme: string;
    static readonly RETRY_WAIT_TIME = 1000;
    static readonly DEPRECATION_ALERT_DELAY = 300000;
    loggedDeprecations: {
        [key: string]: number;
    };
    readonly domain: string;
    constructor(params: HttpClientParams);
    /**
     * Performs a GET request on the given path.
     */
    get<T = unknown>(params: GetRequestParams): Promise<RequestReturn<T>>;
    /**
     * Performs a POST request on the given path.
     */
    post<T = unknown>(params: PostRequestParams): Promise<RequestReturn<T>>;
    /**
     * Performs a PUT request on the given path.
     */
    put<T = unknown>(params: PutRequestParams): Promise<RequestReturn<T>>;
    /**
     * Performs a DELETE request on the given path.
     */
    delete<T = unknown>(params: DeleteRequestParams): Promise<RequestReturn<T>>;
    protected request<T = unknown>(params: RequestParams): Promise<RequestReturn<T>>;
    protected getRequestPath(path: string): string;
    private httpClass;
    private throwFailedRequest;
    private doRequest;
}
export declare function httpClientClass(config: ConfigInterface, scheme?: string): typeof HttpClient;
export {};
//# sourceMappingURL=http_client.d.ts.map