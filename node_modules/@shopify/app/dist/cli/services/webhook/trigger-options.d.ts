import { AppCredentials } from './find-app-info.js';
/**
 * Collects a secret/api-key pair using a fallback mechanism:
 *  - Use secret if passed as flag
 *  - If manual: prompt and use. Return only secret
 *  - If automatic:
 *    - Get from .env
 *    - Get from Partners (possible prompts for organization and app)
 *    - prompt and use
 *
 * @param token - Partners session token
 * @param secret - secret flag
 * @returns a pair with client-secret, api-key (possibly empty)
 */
export declare function collectCredentials(token: string, secret: string | undefined): Promise<AppCredentials>;
/**
 * Collects api-key using a fallback mechanism:
 *  - Get from .env
 *  - Get from Partners (possible prompts for organization and app)
 *
 * @param token - Partners session token
 * @returns a api-key
 * @throws AbortError if none found
 */
export declare function collectApiKey(token: string): Promise<string>;
/**
 * Returns passed apiVersion or prompts for an existing one
 *
 * @param token - Partners session token
 * @param apiVersion - VALID or undefined api-version
 * @returns api-version
 */
export declare function collectApiVersion(token: string, apiVersion: string | undefined): Promise<string>;
/**
 * Returns passed topic if valid or prompts for an existing one
 *
 * @param token - Partners session token
 * @param apiVersion - VALID api-version
 * @param topic - topic or undefined
 * @returns topic
 */
export declare function collectTopic(token: string, apiVersion: string, topic: string | undefined): Promise<string>;
/**
 * Expects either undefined deliveryMethod - address pairs, undefined address or a valid pair
 *
 * @param deliveryMethod - Valid delivery method
 * @param address - Valid address
 * @returns [deliveryMethod, address]
 */
export declare function collectAddressAndMethod(deliveryMethod: string | undefined, address: string | undefined): Promise<[string, string]>;
