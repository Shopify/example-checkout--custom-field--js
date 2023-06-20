import { gql } from 'graphql-request';
export const GenerateSignedUploadUrl = gql `
  mutation GenerateSignedUploadUrl($apiKey: String!, $deploymentUuid: String!, $bundleFormat: Int!) {
    deploymentGenerateSignedUploadUrl(
      input: {apiKey: $apiKey, deploymentUuid: $deploymentUuid, bundleFormat: $bundleFormat}
    ) {
      signedUploadUrl
      userErrors {
        field
        message
      }
    }
  }
`;
//# sourceMappingURL=generate_signed_upload_url.js.map