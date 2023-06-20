import { AdapterArgs, AdapterHeaders, Headers, NormalizedRequest, NormalizedResponse } from '../../runtime/http';
interface MockAdapterArgs extends AdapterArgs {
    rawRequest: NormalizedRequest;
}
export declare function mockConvertRequest(adapterArgs: MockAdapterArgs): Promise<NormalizedRequest>;
export declare function mockConvertResponse(response: NormalizedResponse, _adapterArgs: MockAdapterArgs): Promise<NormalizedResponse>;
export declare function mockConvertHeaders(headers: Headers, _adapterArgs: MockAdapterArgs): Promise<AdapterHeaders>;
export declare function mockFetch({ url, method, headers, body, }: NormalizedRequest): Promise<NormalizedResponse>;
export declare function mockRuntimeString(): string;
export {};
//# sourceMappingURL=adapter.d.ts.map