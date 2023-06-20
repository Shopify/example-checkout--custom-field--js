/// <reference types="node" resolution-mode="require"/>
import type { AppInterface } from './app.js';
export interface IdentifiersExtensions {
    [localIdentifier: string]: string;
}
export interface Identifiers {
    /** Application's API Key */
    app: string;
    /**
     * The extensions' unique identifiers.
     */
    extensions: IdentifiersExtensions;
    /**
     * The extensions' numeric identifiers (expressed as a string).
     */
    extensionIds: IdentifiersExtensions;
}
export type UuidOnlyIdentifiers = Omit<Identifiers, 'extensionIds'>;
type UpdateAppIdentifiersCommand = 'dev' | 'deploy';
interface UpdateAppIdentifiersOptions {
    app: AppInterface;
    identifiers: UuidOnlyIdentifiers;
    command: UpdateAppIdentifiersCommand;
}
/**
 * Given an app and a set of identifiers, it persists the identifiers in the .env files.
 * @param options - Options.
 * @returns An copy of the app with the environment updated to reflect the updated identifiers.
 */
export declare function updateAppIdentifiers({ app, identifiers, command }: UpdateAppIdentifiersOptions, systemEnvironment?: NodeJS.ProcessEnv): Promise<AppInterface>;
interface GetAppIdentifiersOptions {
    app: AppInterface;
}
/**
 * Given an app and a environment, it fetches the ids from the environment
 * and returns them.
 */
export declare function getAppIdentifiers({ app }: GetAppIdentifiersOptions, systemEnvironment?: NodeJS.ProcessEnv): Partial<UuidOnlyIdentifiers>;
export {};
