import { LocalStorage } from '../../public/node/local-storage.js';
interface CacheValue<T> {
    value: T;
    timestamp: number;
}
export type IntrospectionUrlKey = `identity-introspection-url-${string}`;
interface Cache {
    [introspectionUrlKey: IntrospectionUrlKey]: CacheValue<string>;
}
export interface ConfSchema {
    sessionStore: string;
    cache?: Cache;
}
/**
 * Get session.
 *
 * @returns Session.
 */
export declare function getSession(config?: LocalStorage<ConfSchema>): string | undefined;
/**
 * Set session.
 *
 * @param session - Session.
 */
export declare function setSession(session: string, config?: LocalStorage<ConfSchema>): void;
/**
 * Remove session.
 */
export declare function removeSession(config?: LocalStorage<ConfSchema>): void;
type CacheValueForKey<TKey extends keyof Cache> = NonNullable<Cache[TKey]>['value'];
/**
 * Fetch from cache, or run the provided function to get the value, and cache it
 * before returning it.
 * @param key - The key to use for the cache.
 * @param fn - The function to run to get the value to cache, if a cache miss occurs.
 * @param timeout - The maximum valid age of a cached value, in milliseconds.
 * If the cached value is older than this, it will be refreshed.
 * @returns The value from the cache or the result of the function.
 */
export declare function cacheRetrieveOrRepopulate(key: keyof Cache, fn: () => Promise<CacheValueForKey<typeof key>>, timeout?: number, config?: LocalStorage<ConfSchema>): Promise<CacheValueForKey<typeof key>>;
export {};
