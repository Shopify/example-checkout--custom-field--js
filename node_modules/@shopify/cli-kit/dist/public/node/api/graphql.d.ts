import { rawRequest, RequestDocument, Variables } from 'graphql-request';
export interface GraphQLVariables {
    [key: string]: any;
}
export type GraphQLResponse<T> = Awaited<ReturnType<typeof rawRequest<T>>>;
export interface GraphQLRequestOptions<T> {
    query: RequestDocument;
    api: string;
    url: string;
    token?: string;
    addedHeaders?: {
        [header: string]: string;
    };
    variables?: Variables;
    responseOptions?: GraphQLResponseOptions<T>;
}
export interface GraphQLResponseOptions<T> {
    handleErrors?: boolean;
    onResponse?: (response: GraphQLResponse<T>) => void;
}
/**
 * Executes a GraphQL query to an endpoint.
 *
 * @param options - GraphQL request options.
 * @returns The response of the query of generic type <T>.
 */
export declare function graphqlRequest<T>(options: GraphQLRequestOptions<T>): Promise<T>;
