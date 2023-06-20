/// <reference types="node" resolution-mode="require"/>
import type { URL } from 'url';
/**
 * Joins a list of paths together.
 *
 * @param paths - Paths to join.
 * @returns Joined path.
 */
export declare function joinPath(...paths: string[]): string;
/**
 * Normalizes a path.
 *
 * @param path - Path to normalize.
 * @returns Normalized path.
 */
export declare function normalizePath(path: string): string;
/**
 * Resolves a list of paths together.
 *
 * @param paths - Paths to resolve.
 * @returns Resolved path.
 */
export declare function resolvePath(...paths: string[]): string;
/**
 * Returns the relative path from one path to another.
 *
 * @param from - Path to resolve from.
 * @param to - Path to resolve to.
 * @returns Relative path.
 */
export declare function relativePath(from: string, to: string): string;
/**
 * Returns whether the path is absolute.
 *
 * @param path - Path to check.
 * @returns Whether the path is absolute.
 */
export declare function isAbsolutePath(path: string): boolean;
/**
 * Returns the directory name of a path.
 *
 * @param path - Path to get the directory name of.
 * @returns Directory name.
 */
export declare function dirname(path: string): string;
/**
 * Returns the base name of a path.
 *
 * @param path - Path to get the base name of.
 * @param ext - Optional extension to remove from the result.
 * @returns Base name.
 */
export declare function basename(path: string, ext?: string): string;
/**
 * Returns the extension of the path.
 *
 * @param path - Path to get the extension of.
 * @returns Extension.
 */
export declare function extname(path: string): string;
/**
 * Given an absolute filesystem path, it makes it relative to
 * the current working directory. This is useful when logging paths
 * to allow the users to click on the file and let the OS open it
 * in the editor of choice.
 *
 * @param path - Path to relativize.
 * @param dir - Current working directory.
 * @returns Relativized path.
 */
export declare function relativizePath(path: string, dir?: string): string;
/**
 * Given a module's import.meta.url it returns the directory containing the module.
 *
 * @param moduleURL - The value of import.meta.url in the context of the caller module.
 * @returns The path to the directory containing the caller module.
 */
export declare function moduleDirectory(moduleURL: string | URL): string;
/**
 * When running a script using `npm run`, something interesting happens. If the current
 * folder does not have a `package.json` or a `node_modules` folder, npm will traverse
 * the directory tree upwards until it finds one. Then it will run the script and set
 * `process.cwd()` to that folder, while the actual path is stored in the INIT_CWD
 * environment variable (see here: https://docs.npmjs.com/cli/v9/commands/npm-run-script#description).
 *
 * @returns The path to the current working directory.
 */
export declare function cwd(): string;
