import { Organization, OrganizationStore } from '../../models/organization.js';
/**
 * Select store from list or
 * If a cachedStoreName is provided, we check if it is valid and return it. If it's not valid, ignore it.
 * If there are no stores, show a link to create a store and prompt the user to refresh the store list
 * If no store is finally selected, exit process
 * @param stores - List of available stores
 * @param orgId - Current organization ID
 * @param cachedStoreName - Cached store name
 * @returns The selected store
 */
export declare function selectStore(stores: OrganizationStore[], org: Organization, token: string): Promise<OrganizationStore>;
/**
 * Check if the store exists in the current organization and it is a valid store
 * To be valid, it must be non-transferable.
 * @param storeDomain - Store domain to check
 * @param stores - List of available stores
 * @param orgId - Current organization ID
 * @param token - Token to access partners API
 * @returns True if the store is valid
 * @throws If the store can't be found in the organization or we fail to make it a test store
 */
export declare function convertToTestStoreIfNeeded(store: OrganizationStore, orgId: string, token: string): Promise<void>;
/**
 * Convert a store to a test store so development apps can be installed
 * This can't be undone, so we ask the user to confirm
 * @param store - Store to convert
 * @param orgId - Current organization ID
 * @param token - Token to access partners API
 */
export declare function convertStoreToTest(store: OrganizationStore, orgId: string, token: string): Promise<void>;
