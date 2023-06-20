import { NormalizedRequest, NormalizedResponse } from '../../runtime/http';
declare type RequestListEntry = NormalizedRequest;
declare type ResponseListEntry = NormalizedResponse | Error;
interface MockedAdapter {
    requestList: RequestListEntry[];
    responseList: ResponseListEntry[];
    queueResponse: (response: NormalizedResponse) => void;
    queueError: (error: Error) => void;
    getRequest: () => RequestListEntry | undefined;
    getResponses: () => ResponseListEntry[];
    reset: () => void;
}
export declare const mockTestRequests: MockedAdapter;
export {};
//# sourceMappingURL=mock_test_requests.d.ts.map