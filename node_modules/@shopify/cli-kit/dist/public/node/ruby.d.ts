/// <reference types="node" resolution-mode="require"/>
import { AbortSignal } from './abort.js';
import { AdminSession } from '../../public/node/session.js';
import { Writable } from 'stream';
export declare const RubyCLIVersion = "2.35.0";
export declare const MinWdmWindowsVersion = "0.1.0";
interface ExecCLI2Options {
    adminSession?: AdminSession;
    storefrontToken?: string;
    token?: string;
    directory?: string;
    signal?: AbortSignal;
    stdout?: Writable;
    stderr?: Writable;
}
/**
 * Execute CLI 2.0 commands.
 * Installs a version of RubyCLI as a vendor dependency in a hidden folder in the system.
 * User must have a valid ruby+bundler environment to run any command.
 *
 * @param args - List of argumets to execute. (ex: ['theme', 'pull']).
 * @param options - Options to customize the execution of cli2.
 */
export declare function execCLI2(args: string[], options?: ExecCLI2Options): Promise<void>;
interface ExecThemeCheckCLIOptions {
    /** A list of directories in which theme-check should run. */
    directories: string[];
    /** Arguments to pass to the theme-check CLI. */
    args?: string[];
    /** Writable to send standard output content through. */
    stdout: Writable;
    /** Writable to send standard error content through. */
    stderr: Writable;
}
/**
 * A function that installs (if needed) and runs the theme-check CLI.
 *
 * @param options - Options to customize the execution of theme-check.
 * @returns A promise that resolves or rejects depending on the result of the underlying theme-check process.
 */
export declare function execThemeCheckCLI(options: ExecThemeCheckCLIOptions): Promise<void[]>;
/**
 * It returns the Ruby version present in the envirronment.
 */
export declare function version(): Promise<string | undefined>;
/**
 * It returns a custom BUNDLE_USER_HOME. This is required in Windows because
 * bundler will instead crash if the username contains UTF-8 characters.
 *
 * @returns The value of the environment variable.
 */
export declare function bundleUserHome(): string | undefined;
export {};
