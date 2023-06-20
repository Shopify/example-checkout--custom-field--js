export declare function retry<T>(operation: () => T, retryDelay: number): Promise<T>;
