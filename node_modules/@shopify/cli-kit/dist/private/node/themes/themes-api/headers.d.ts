import { RestResponse } from '@shopify/cli-kit/node/api/admin';
export declare function retryAfter(response: RestResponse): number;
export declare function apiCallLimit(response: RestResponse): [number, number] | undefined;
