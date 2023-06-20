import { JsonMap } from '../../private/common/json.js';
export interface Environments {
    [name: string]: JsonMap;
}
interface LoadEnvironmentOptions {
    from?: string;
}
/**
 * Loads environments from a file.
 * @param dir - The file path to load environments from.
 * @returns The loaded environments.
 */
export declare function loadEnvironment(environmentName: string, fileName: string, options?: LoadEnvironmentOptions): Promise<JsonMap | undefined>;
export {};
