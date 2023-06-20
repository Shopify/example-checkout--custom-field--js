import { LocalStorage } from '../../public/node/local-storage.js';
import { outputContent, outputDebug } from '@shopify/cli-kit/node/output';
let _instance;
/**
 * CLIKIT Store.
 *
 * @returns CLIKitStore.
 */
function cliKitStore() {
    if (!_instance) {
        _instance = new LocalStorage({ projectName: 'shopify-cli-kit' });
    }
    return _instance;
}
/**
 * Get session.
 *
 * @returns Session.
 */
export function getSession(config = cliKitStore()) {
    outputDebug(outputContent `Getting session store...`);
    return config.get('sessionStore');
}
/**
 * Set session.
 *
 * @param session - Session.
 */
export function setSession(session, config = cliKitStore()) {
    outputDebug(outputContent `Setting session store...`);
    config.set('sessionStore', session);
}
/**
 * Remove session.
 */
export function removeSession(config = cliKitStore()) {
    outputDebug(outputContent `Removing session store...`);
    config.delete('sessionStore');
}
/**
 * Fetch from cache, or run the provided function to get the value, and cache it
 * before returning it.
 * @param key - The key to use for the cache.
 * @param fn - The function to run to get the value to cache, if a cache miss occurs.
 * @param timeout - The maximum valid age of a cached value, in milliseconds.
 * If the cached value is older than this, it will be refreshed.
 * @returns The value from the cache or the result of the function.
 */
export async function cacheRetrieveOrRepopulate(key, fn, timeout, config = cliKitStore()) {
    const cache = config.get('cache') || {};
    const cached = cache[key];
    if (cached?.value !== undefined && (timeout === undefined || Date.now() - cached.timestamp < timeout)) {
        return cached.value;
    }
    const value = await fn();
    cache[key] = { value, timestamp: Date.now() };
    config.set('cache', cache);
    return value;
}
//# sourceMappingURL=conf-store.js.map