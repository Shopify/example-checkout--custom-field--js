import { AdapterArgs, NormalizedRequest, NormalizedResponse, Headers } from '../../runtime/http';
interface WorkerAdapterArgs extends AdapterArgs {
    rawRequest: Request;
}
declare type WorkerHeaders = [string, string][];
export declare function workerConvertRequest(adapterArgs: WorkerAdapterArgs): Promise<NormalizedRequest>;
export declare function workerConvertResponse(resp: NormalizedResponse, adapterArgs: WorkerAdapterArgs): Promise<Response>;
export declare function workerConvertHeaders(headers: Headers, _adapterArgs: WorkerAdapterArgs): Promise<WorkerHeaders>;
export declare function workerFetch({ url, method, headers, body, }: NormalizedRequest): Promise<NormalizedResponse>;
export declare function workerCreateDefaultStorage(): never;
export declare function workerRuntimeString(): string;
export {};
//# sourceMappingURL=adapter.d.ts.map