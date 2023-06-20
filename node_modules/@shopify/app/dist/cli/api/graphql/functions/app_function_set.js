import { gql } from 'graphql-request';
export const AppFunctionSetMutation = gql `
  mutation FunctionSet(
    $id: FunctionId
    $legacyUuid: String
    $title: String!
    $description: String
    $apiType: String!
    $apiVersion: String!
    $inputQuery: String
    $inputQueryVariables: InputQueryVariablesInput
    $appBridge: AppBridgeInput
    $enableCreationUi: Boolean
    $moduleUploadUrl: String!
  ) {
    functionSet(
      id: $id
      legacyUuid: $legacyUuid
      title: $title
      description: $description
      apiType: $apiType
      apiVersion: $apiVersion
      inputQuery: $inputQuery
      inputQueryVariables: $inputQueryVariables
      appBridge: $appBridge
      enableCreationUi: $enableCreationUi
      moduleUploadUrl: $moduleUploadUrl
    ) {
      userErrors {
        field
        message
        tag
      }
      function {
        id
      }
    }
  }
`;
//# sourceMappingURL=app_function_set.js.map