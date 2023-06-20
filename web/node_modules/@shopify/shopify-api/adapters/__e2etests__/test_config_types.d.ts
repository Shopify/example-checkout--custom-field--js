/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { NormalizedRequest, NormalizedResponse } from '../../runtime/http';
import { DataType } from '../../lib/clients/http_client/types';
export interface TestRequest extends NormalizedRequest {
    bodyType?: DataType;
    tries?: number;
    query?: string;
    retryTimeoutTimer?: number;
}
export interface TestResponse extends NormalizedResponse {
    errorType?: string;
    errorMessage?: string;
    expectRequestId?: string;
}
export interface TestConfig {
    testRequest: TestRequest;
    expectedResponse: TestResponse;
}
export declare function initTestRequest(options?: Partial<TestRequest>): TestRequest;
export declare function initTestResponse(options?: Partial<TestResponse>): TestResponse;
export interface E2eTestEnvironment {
    name: string;
    domain: string;
    dummyServerPort: string;
    process: ChildProcess;
    testable: boolean;
    ready: boolean;
}
//# sourceMappingURL=test_config_types.d.ts.map