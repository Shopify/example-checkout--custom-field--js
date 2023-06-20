/// <reference types="node" />
import type { IncomingMessage, ServerResponse } from 'http';
import { AdapterArgs, Headers, NormalizedRequest, NormalizedResponse } from '../../runtime/http';
interface NodeAdapterArgs extends AdapterArgs {
    rawRequest: IncomingMessage;
    rawResponse: ServerResponse;
}
export declare function nodeConvertRequest(adapterArgs: NodeAdapterArgs): Promise<NormalizedRequest>;
export declare function nodeConvertIncomingResponse(adapterArgs: NodeAdapterArgs): Promise<NormalizedResponse>;
export declare function nodeConvertAndSendResponse(response: NormalizedResponse, adapterArgs: NodeAdapterArgs): Promise<void>;
export declare function nodeConvertAndSetHeaders(headers: Headers, adapterArgs: NodeAdapterArgs): Promise<void>;
export declare function nodeFetch({ url, method, headers, body, }: NormalizedRequest): Promise<NormalizedResponse>;
export declare function nodeRuntimeString(): string;
export {};
//# sourceMappingURL=adapter.d.ts.map