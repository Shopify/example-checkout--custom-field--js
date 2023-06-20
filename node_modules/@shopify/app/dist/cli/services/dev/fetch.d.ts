import { MinimalOrganizationApp, Organization, OrganizationApp, OrganizationStore } from '../../models/organization.js';
import { AllAppExtensionRegistrationsQuerySchema } from '../../api/graphql/all_app_extension_registrations.js';
import { AbortError } from '@shopify/cli-kit/node/error';
export declare const NoOrgError: (organizationId?: string) => AbortError;
export interface OrganizationAppsResponse {
    pageInfo: {
        hasNextPage: boolean;
    };
    nodes: MinimalOrganizationApp[];
}
export interface FetchResponse {
    organization: Organization;
    apps: OrganizationAppsResponse;
    stores: OrganizationStore[];
}
export declare function fetchAppExtensionRegistrations({ token, apiKey, }: {
    token: string;
    apiKey: string;
}): Promise<AllAppExtensionRegistrationsQuerySchema>;
/**
 * Fetch all organizations the user belongs to
 * If the user doesn't belong to any org, throw an error
 * @param token - Token to access partners API
 * @returns List of organizations
 */
export declare function fetchOrganizations(token: string): Promise<import("../../api/graphql/all_orgs.js").AllOrganizationsQuerySchemaOrganization[]>;
/**
 * Fetch all apps and stores for the given organization
 * @param orgId - Organization ID
 * @param token - Token to access partners API
 * @returns Current organization details and list of apps and stores
 */
export declare function fetchOrgAndApps(orgId: string, token: string, title?: string): Promise<FetchResponse>;
export declare function fetchAppFromApiKey(apiKey: string, token: string): Promise<OrganizationApp | undefined>;
export declare function fetchOrgFromId(id: string, token: string): Promise<Organization>;
export declare function fetchAllDevStores(orgId: string, token: string): Promise<OrganizationStore[]>;
interface FetchStoreByDomainOutput {
    organization: Organization;
    store?: OrganizationStore;
}
/**
 * Returns the organization and the store based on passed domain
 * If a store with that domain doesn't exist the method returns undefined
 * @param orgId - Organization ID
 * @param token - Token to access partners API
 * @param shopDomain - shop domain fqdn
 */
export declare function fetchStoreByDomain(orgId: string, token: string, shopDomain: string): Promise<FetchStoreByDomainOutput | undefined>;
export {};
