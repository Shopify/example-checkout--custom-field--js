import { gql } from 'graphql-request';
export const ApiSchemaDefinitionQuery = gql `
  query ApiSchemaDefinitionQuery($apiKey: String!, $version: String!, $type: String!) {
    definition: functionApiSchemaDefinition(apiKey: $apiKey, version: $version, type: $type)
  }
`;
//# sourceMappingURL=api_schema_definition.js.map