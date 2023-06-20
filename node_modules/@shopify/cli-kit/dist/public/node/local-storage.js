import Config from 'conf';
/**
 * A wrapper around the `conf` package that provides a strongly-typed interface
 * for accessing the local storage.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class LocalStorage {
    constructor(options) {
        this.config = new Config(options);
    }
    /**
     * Get a value from the local storage.
     *
     * @param key - The key to get.
     * @returns The value.
     */
    get(key) {
        return this.config.get(key);
    }
    /**
     * Set a value in the local storage.
     *
     * @param key - The key to set.
     * @param value - The value to set.
     */
    set(key, value) {
        this.config.set(key, value);
    }
    /**
     * Delete a value from the local storage.
     *
     * @param key - The key to delete.
     */
    delete(key) {
        this.config.delete(key);
    }
    /**
     * Clear the local storage (delete all values).
     */
    clear() {
        this.config.clear();
    }
}
//# sourceMappingURL=local-storage.js.map