import { ApplicationToken, IdentityToken } from './schema.js';
import { CodeAuthResult } from './authorize.js';
import { Result } from '../../../public/node/result.js';
import { ExtendableError } from '../../../public/node/error.js';
export declare class InvalidGrantError extends ExtendableError {
}
export declare class InvalidRequestError extends ExtendableError {
}
export interface ExchangeScopes {
    admin: string[];
    partners: string[];
    storefront: string[];
}
/**
 * Given a valid authorization code, request an identity access token.
 * This token can then be used to get API specific tokens.
 * @param codeData - code and codeVerifier from the authorize endpoint
 * @returns An instance with the identity access tokens.
 */
export declare function exchangeCodeForAccessToken(codeData: CodeAuthResult): Promise<IdentityToken>;
/**
 * Given an identity token, request an application token.
 * @param identityToken - access token obtained in a previous step
 * @param store - the store to use, only needed for admin API
 * @returns An array with the application access tokens.
 */
export declare function exchangeAccessForApplicationTokens(identityToken: IdentityToken, scopes: ExchangeScopes, store?: string): Promise<{
    [x: string]: ApplicationToken;
}>;
/**
 * Given an expired access token, refresh it to get a new one.
 */
export declare function refreshAccessToken(currentToken: IdentityToken): Promise<IdentityToken>;
/**
 * Given a custom CLI token passed as ENV variable, request a valid partners API token
 * This token does not accept extra scopes, just the cli one.
 * @param token - The CLI token passed as ENV variable
 * @returns An instance with the application access tokens.
 */
export declare function exchangeCustomPartnerToken(token: string): Promise<ApplicationToken>;
export type IdentityDeviceError = 'authorization_pending' | 'access_denied' | 'expired_token' | 'slow_down' | 'unknown_failure';
/**
 * Given a deviceCode obtained after starting a device identity flow, request an identity token.
 * @param deviceCode - The device code obtained after starting a device identity flow
 * @param scopes - The scopes to request
 * @returns An instance with the identity access tokens.
 */
export declare function exchangeDeviceCodeForAccessToken(deviceCode: string): Promise<Result<IdentityToken, IdentityDeviceError>>;
