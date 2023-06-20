import { gql } from 'graphql-request';
export const ExtensionMigrateToUiExtensionQuery = gql `
  mutation MigrateToUiExtension($apiKey: String!, $registrationId: ID!) {
    migrateToUiExtension(input: {apiKey: $apiKey, registrationId: $registrationId}) {
      migratedToUiExtension
      userErrors {
        field
        message
      }
    }
  }
`;
//# sourceMappingURL=extension_migrate_to_ui_extension.js.map