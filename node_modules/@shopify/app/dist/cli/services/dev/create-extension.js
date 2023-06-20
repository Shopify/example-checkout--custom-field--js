import { ExtensionCreateQuery, } from '../../api/graphql/extension_create.js';
import { partnersRequest } from '@shopify/cli-kit/node/api/partners';
import { AbortError } from '@shopify/cli-kit/node/error';
export async function createExtension(apiKey, graphQLType, name, token) {
    const query = ExtensionCreateQuery;
    const variables = {
        apiKey,
        type: graphQLType,
        title: name,
        config: JSON.stringify({}),
        context: null,
    };
    const result = await partnersRequest(query, token, variables);
    if (result.extensionCreate.userErrors?.length > 0) {
        const errors = result.extensionCreate.userErrors.map((error) => error.message).join(', ');
        throw new AbortError(errors);
    }
    return result.extensionCreate.extensionRegistration;
}
//# sourceMappingURL=create-extension.js.map