import { GraphQLVariables } from './graphql.js';
import { AdminSession } from '../session.js';
/**
 * Executes a GraphQL query against the Admin API.
 *
 * @param query - GraphQL query to execute.
 * @param session - Shopify admin session including token and Store FQDN.
 * @param variables - GraphQL variables to pass to the query.
 * @returns The response of the query of generic type <T>.
 */
export declare function adminRequest<T>(query: string, session: AdminSession, variables?: GraphQLVariables): Promise<T>;
/**
 * Executes a REST request against the Admin API.
 *
 * @param method - Request's HTTP method.
 * @param path - Path of the REST resource.
 * @param session - Shopify Admin session including token and Store FQDN.
 * @param requestBody - Request body of including REST resource specific parameters.
 * @param searchParams - Search params, appended to the URL.
 * @param apiVersion - Admin API version.
 * @returns - The {@link RestResponse}.
 */
export declare function restRequest<T>(method: string, path: string, session: AdminSession, requestBody?: T, searchParams?: {
    [name: string]: string;
}, apiVersion?: string): Promise<RestResponse>;
/**
 * Respose of a REST request.
 */
export interface RestResponse {
    /**
     * REST JSON respose.
     */
    json: any;
    /**
     * HTTP response status.
     */
    status: number;
    /**
     * HTTP response headers.
     */
    headers: {
        [key: string]: string[];
    };
}
