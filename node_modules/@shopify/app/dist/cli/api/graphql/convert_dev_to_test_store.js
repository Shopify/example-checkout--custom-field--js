import { gql } from 'graphql-request';
export const ConvertDevToTestStoreQuery = gql `
  mutation convertDevToTestStore($input: ConvertDevToTestStoreInput!) {
    convertDevToTestStore(input: $input) {
      convertedToTestStore
      userErrors {
        message
        field
      }
    }
  }
`;
//# sourceMappingURL=convert_dev_to_test_store.js.map