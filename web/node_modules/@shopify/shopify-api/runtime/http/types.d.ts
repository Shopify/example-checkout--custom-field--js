export interface Headers {
    [key: string]: string | string[];
}
export interface NormalizedRequest {
    method: string;
    url: string;
    headers: Headers;
    body?: string;
}
export interface NormalizedResponse {
    statusCode: number;
    statusText: string;
    headers?: Headers;
    body?: string;
}
export declare type AdapterRequest = any;
export declare type AdapterResponse = any;
export declare type AdapterHeaders = any;
export interface AdapterArgs {
    rawRequest: AdapterRequest;
    rawResponse?: AdapterResponse;
}
export declare type AbstractFetchFunc = (req: NormalizedRequest) => Promise<NormalizedResponse>;
export declare type AbstractConvertRequestFunc = (adapterArgs: AdapterArgs) => Promise<NormalizedRequest>;
export declare type AbstractConvertIncomingResponseFunc = (adapterArgs: AdapterArgs) => Promise<NormalizedResponse>;
export declare type AbstractConvertResponseFunc = (response: NormalizedResponse, adapterArgs: AdapterArgs) => Promise<AdapterResponse>;
export declare type AbstractConvertHeadersFunc = (headers: Headers, adapterArgs: AdapterArgs) => Promise<AdapterHeaders>;
//# sourceMappingURL=types.d.ts.map