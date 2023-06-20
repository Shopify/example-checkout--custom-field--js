import { ApplicationToken, IdentityToken } from './schema.js';
import { OAuthApplications } from '../session.js';
type ValidationResult = 'needs_refresh' | 'needs_full_auth' | 'ok';
/**
 * Validate if the current session is valid or we need to refresh/re-authenticate
 * @param scopes - requested scopes to validate
 * @param applications - requested applications
 * @param session - current session with identity and application tokens
 * @returns 'ok' if the session is valid, 'needs_full_auth' if we need to re-authenticate, 'needs_refresh' if we need to refresh the session
 */
export declare function validateSession(scopes: string[], applications: OAuthApplications, session: {
    identity: IdentityToken;
    applications: {
        [x: string]: ApplicationToken;
    };
}): Promise<ValidationResult>;
export {};
