export declare function throttle<T>(request: () => T): Promise<T>;
export declare function updateApiCallLimit(callLimit: [number, number] | undefined): void;
