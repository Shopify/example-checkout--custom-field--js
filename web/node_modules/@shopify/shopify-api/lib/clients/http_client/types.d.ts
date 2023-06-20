import { Method } from '@shopify/network';
import { Headers } from '../../../runtime/http';
export interface HeaderParams {
    [key: string]: string | number | string[];
}
export declare enum DataType {
    JSON = "application/json",
    GraphQL = "application/graphql",
    URLEncoded = "application/x-www-form-urlencoded"
}
export declare type QueryParams = string | number | string[] | number[] | {
    [key: string]: QueryParams;
};
export interface GetRequestParams {
    path: string;
    type?: DataType;
    data?: {
        [key: string]: unknown;
    } | string;
    query?: {
        [key: string]: QueryParams;
    };
    extraHeaders?: HeaderParams;
    tries?: number;
}
export declare type PostRequestParams = GetRequestParams & {
    data: {
        [key: string]: unknown;
    } | string;
};
export declare type PutRequestParams = PostRequestParams;
export declare type DeleteRequestParams = GetRequestParams;
export declare type RequestParams = (GetRequestParams | PostRequestParams) & {
    method: Method;
};
export interface RequestReturn<T = unknown> {
    body: T;
    headers: Headers;
}
//# sourceMappingURL=types.d.ts.map