import { GraphQLVariables, GraphQLResponse } from './graphql.js';
/**
 * Executes a GraphQL query against the Partners API.
 *
 * @param query - GraphQL query to execute.
 * @param token - Partners token.
 * @param variables - GraphQL variables to pass to the query.
 * @returns The response of the query of generic type <T>.
 */
export declare function partnersRequest<T>(query: string, token: string, variables?: GraphQLVariables): Promise<T>;
/**
 * Function queries are proxied through the script service proxy.
 * To execute a query, we encapsulate it inside another query (including the variables)
 * This is done automatically, you just need to provide the query and the variables.
 *
 * @param apiKey - APIKey of the app where the query will be executed.
 * @param query - GraphQL query to execute.
 * @param token - Partners token.
 * @param variables - GraphQL variables to pass to the query.
 * @returns The response of the query.
 */
export declare function functionProxyRequest<T>(apiKey: string, query: unknown, token: string, variables?: unknown): Promise<T>;
/**
 * Sets the next deprecation date from [GraphQL response extensions](https://www.apollographql.com/docs/resources/graphql-glossary/#extensions)
 * if `response.extensions.deprecations` objects contain a `supportedUntilDate` (ISO 8601-formatted string).
 *
 * @param response - The response of the query.
 */
export declare function handleDeprecations<T>(response: GraphQLResponse<T>): void;
