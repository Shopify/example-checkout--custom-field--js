import { API } from '../api.js';
/**
 * Generate a flat array with all the default scopes for all the APIs plus
 * any custom scope defined by the user.
 * @param extraScopes - custom user-defined scopes
 * @returns Array of scopes
 */
export declare function allDefaultScopes(extraScopes?: string[]): string[];
/**
 * Generate a flat array with the default scopes for the given API plus
 * any custom scope defined by the user
 * @param api - API to get the scopes for
 * @param extraScopes - custom user-defined scopes
 * @returns Array of scopes
 */
export declare function apiScopes(api: API, extraScopes?: string[]): string[];
