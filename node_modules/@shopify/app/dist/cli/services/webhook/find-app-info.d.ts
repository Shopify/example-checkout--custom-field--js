export interface AppCredentials {
    clientSecret?: string;
    apiKey?: string;
    clientId?: string;
}
/**
 * Grabs secret and api_key from .env file if existing
 *
 * @returns secret and api_key
 */
export declare function findInEnv(): Promise<AppCredentials>;
/**
 * Find the app api_key, if available
 *
 * @param token - partners token
 * @returns apiKey
 */
export declare function findApiKey(token: string): Promise<string | undefined>;
/**
 * Find the app api_key, if available
 *
 * @param token - partners token
 * @param apiKey - app api_key
 * @returns client_id, client_secret, client_api_key
 */
export declare function requestAppInfo(token: string, apiKey: string): Promise<AppCredentials>;
