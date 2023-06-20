import { gql } from 'graphql-request';
export const ExtensionSpecificationsQuery = gql `
  query fetchSpecifications($api_key: String!) {
    extensionSpecifications(apiKey: $api_key) {
      name
      externalName
      externalIdentifier
      identifier
      gated
      options {
        managementExperience
        registrationLimit
      }
      features {
        argo {
          surface
        }
      }
    }
  }
`;
//# sourceMappingURL=extension_specifications.js.map