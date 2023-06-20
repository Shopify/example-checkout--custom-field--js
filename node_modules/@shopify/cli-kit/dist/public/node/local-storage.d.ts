/**
 * A wrapper around the `conf` package that provides a strongly-typed interface
 * for accessing the local storage.
 */
export declare class LocalStorage<T extends {
    [key: string]: any;
}> {
    private readonly config;
    constructor(options: {
        projectName?: string;
        cwd?: string;
    });
    /**
     * Get a value from the local storage.
     *
     * @param key - The key to get.
     * @returns The value.
     */
    get<TKey extends keyof T>(key: TKey): T[TKey];
    /**
     * Set a value in the local storage.
     *
     * @param key - The key to set.
     * @param value - The value to set.
     */
    set<TKey extends keyof T>(key: TKey, value?: T[TKey]): void;
    /**
     * Delete a value from the local storage.
     *
     * @param key - The key to delete.
     */
    delete<TKey extends keyof T>(key: TKey): void;
    /**
     * Clear the local storage (delete all values).
     */
    clear(): void;
}
