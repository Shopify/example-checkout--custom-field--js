import { buildHeaders, httpsAgent } from '../../../private/node/api/headers.js';
import { debugLogRequestInfo, errorHandler } from '../../../private/node/api/graphql.js';
import { debugLogResponseInfo } from '../../../private/node/api.js';
import { GraphQLClient } from 'graphql-request';
/**
 * Executes a GraphQL query to an endpoint.
 *
 * @param options - GraphQL request options.
 * @returns The response of the query of generic type <T>.
 */
export async function graphqlRequest(options) {
    const { query, api, url, token, addedHeaders, variables, responseOptions } = options;
    const headers = {
        ...addedHeaders,
        ...buildHeaders(token),
    };
    debugLogRequestInfo(api, query, variables, headers);
    const clientOptions = { agent: await httpsAgent(), headers };
    const client = new GraphQLClient(url, clientOptions);
    const response = await debugLogResponseInfo({ request: client.rawRequest(query, variables), url }, responseOptions?.handleErrors === false ? undefined : errorHandler(api));
    if (responseOptions?.onResponse) {
        responseOptions.onResponse(response);
    }
    return response.data;
}
//# sourceMappingURL=graphql.js.map