/**
 * Tries to identify the using of a framework analyzing the existence and/or content of different files inside a
 * specific directory.
 *
 * @param rootDirectory - Directory from which the files required for each framework are searched
 * @returns The name of the framework used or 'unknown' otherwise
 */
export declare function resolveFramework(rootDirectory: string): Promise<string>;
