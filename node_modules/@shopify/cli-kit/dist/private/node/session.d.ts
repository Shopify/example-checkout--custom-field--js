/// <reference types="node" resolution-mode="require"/>
import { AdminSession } from '@shopify/cli-kit/node/session';
/**
 * A scope supported by the Shopify Admin API.
 */
type AdminAPIScope = 'graphql' | 'themes' | 'collaborator' | string;
/**
 * It represents the options to authenticate against the Shopify Admin API.
 */
interface AdminAPIOAuthOptions {
    /** Store to request permissions for. */
    storeFqdn: string;
    /** List of scopes to request permissions for. */
    scopes: AdminAPIScope[];
}
/**
 * A scope supported by the Partners API.
 */
type PartnersAPIScope = 'cli' | string;
interface PartnersAPIOAuthOptions {
    /** List of scopes to request permissions for. */
    scopes: PartnersAPIScope[];
}
/**
 * A scope supported by the Storefront Renderer API.
 */
type StorefrontRendererScope = 'devtools' | string;
interface StorefrontRendererAPIOAuthOptions {
    /** List of scopes to request permissions for. */
    scopes: StorefrontRendererScope[];
}
/**
 * It represents the authentication requirements and
 * is the input necessary to trigger the authentication
 * flow.
 */
export interface OAuthApplications {
    adminApi?: AdminAPIOAuthOptions;
    storefrontRendererApi?: StorefrontRendererAPIOAuthOptions;
    partnersApi?: PartnersAPIOAuthOptions;
}
export interface OAuthSession {
    admin?: AdminSession;
    partners?: string;
    storefront?: string;
}
/**
 * This method ensures that we have a valid session to authenticate against the given applications using the provided scopes.
 *
 * @param applications - An object containing the applications we need to be authenticated with.
 * @param _env - Optional environment variables to use.
 * @param forceRefresh - Optional flag to force a refresh of the token.
 * @returns An instance with the access tokens organized by application.
 */
export declare function ensureAuthenticated(applications: OAuthApplications, _env?: NodeJS.ProcessEnv, forceRefresh?: boolean): Promise<OAuthSession>;
export {};
