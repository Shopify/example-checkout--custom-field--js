import { gql } from 'graphql-request';
export const CreateAppQuery = gql `
  mutation AppCreate($org: Int!, $title: String!, $appUrl: Url!, $redir: [Url]!, $type: AppType) {
    appCreate(
      input: {
        organizationID: $org
        title: $title
        applicationUrl: $appUrl
        redirectUrlWhitelist: $redir
        appType: $type
      }
    ) {
      app {
        id
        apiKey
        title
        appType
        applicationUrl
        redirectUrlWhitelist
        apiSecretKeys {
          secret
        }
        appType
        grantedScopes
      }
      userErrors {
        field
        message
      }
    }
  }
`;
//# sourceMappingURL=create_app.js.map