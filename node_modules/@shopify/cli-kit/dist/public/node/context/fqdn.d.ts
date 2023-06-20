import { AbortError } from '../error.js';
export declare const CouldntObtainPartnersSpinFQDNError: AbortError;
export declare const CouldntObtainIdentitySpinFQDNError: AbortError;
export declare const CouldntObtainShopifySpinFQDNError: AbortError;
export declare const NotProvidedStoreFQDNError: AbortError;
/**
 * It returns the Partners' API service we should interact with.
 *
 * @returns Fully-qualified domain of the partners service we should interact with.
 */
export declare function partnersFqdn(): Promise<string>;
/**
 * It returns the Identity service we should interact with.
 *
 * @returns Fully-qualified domain of the Identity service we should interact with.
 */
export declare function identityFqdn(): Promise<string>;
/**
 * Normalize the store name to be used in the CLI.
 * It will add the .myshopify.com domain if it's not present.
 * It will add the spin domain if it's not present and we're in a Spin environment.
 *
 * @param store - Store name.
 * @returns Normalized store name.
 */
export declare function normalizeStoreFqdn(store: string): Promise<string>;
