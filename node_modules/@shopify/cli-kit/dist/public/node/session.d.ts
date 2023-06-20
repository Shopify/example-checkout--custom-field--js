/// <reference types="node" resolution-mode="require"/>
/**
 * Session Object to access the Admin API, includes the token and the store FQDN.
 */
export interface AdminSession {
    token: string;
    storeFqdn: string;
}
/**
 * Ensure that we have a valid session to access the Partners API.
 * If SHOPIFY_CLI_PARTNERS_TOKEN exists, that token will be used to obtain a valid Partners Token
 * If SHOPIFY_CLI_PARTNERS_TOKEN exists, scopes will be ignored.
 *
 * @param scopes - Optional array of extra scopes to authenticate with.
 * @param _env - Optional environment variables to use.
 * @returns The access token for the Partners API.
 */
export declare function ensureAuthenticatedPartners(scopes?: string[], _env?: NodeJS.ProcessEnv): Promise<string>;
/**
 * Ensure that we have a valid session to access the Storefront API.
 *
 * @param scopes - Optional array of extra scopes to authenticate with.
 * @param password - Optional password to use.
 * @returns The access token for the Storefront API.
 */
export declare function ensureAuthenticatedStorefront(scopes?: string[], password?: string | undefined): Promise<string>;
/**
 * Ensure that we have a valid Admin session for the given store.
 *
 * @param store - Store fqdn to request auth for.
 * @param scopes - Optional array of extra scopes to authenticate with.
 * @param forceRefresh - Optional flag to force a refresh of the token.
 * @returns The access token for the Admin API.
 */
export declare function ensureAuthenticatedAdmin(store: string, scopes?: string[], forceRefresh?: boolean): Promise<AdminSession>;
/**
 * Ensure that we have a valid session to access the Theme API.
 * If a password is provided, that token will be used against Theme Access API.
 * Otherwise, it will ensure that the user is authenticated with the Admin API.
 *
 * @param store - Store fqdn to request auth for.
 * @param password - Password generated from Theme Access app.
 * @param scopes - Optional array of extra scopes to authenticate with.
 * @param forceRefresh - Optional flag to force a refresh of the token.
 * @returns The access token and store.
 */
export declare function ensureAuthenticatedThemes(store: string, password: string | undefined, scopes?: string[], forceRefresh?: boolean): Promise<AdminSession>;
/**
 * Logout from Shopify.
 *
 * @returns A promise that resolves when the logout is complete.
 */
export declare function logout(): Promise<void>;
