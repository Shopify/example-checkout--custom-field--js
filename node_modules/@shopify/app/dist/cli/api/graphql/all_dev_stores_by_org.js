import { gql } from 'graphql-request';
export const AllDevStoresByOrganizationQuery = gql `
  query FindOrganization($id: ID!) {
    organizations(id: $id, first: 1) {
      nodes {
        id
        stores(first: 500, archived: false, type: [DEVELOPMENT, PLUS_SANDBOX]) {
          nodes {
            shopId
            link
            shopDomain
            shopName
            transferDisabled
            convertableToPartnerTest
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=all_dev_stores_by_org.js.map