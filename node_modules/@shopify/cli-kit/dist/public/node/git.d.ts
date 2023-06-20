import { AbortError } from './error.js';
import { DefaultLogFields, ListLogLine } from 'simple-git';
/**
 * Initialize a git repository at the given directory.
 *
 * @param directory - The directory where the git repository will be initialized.
 * @param initialBranch - The name of the initial branch.
 */
export declare function initializeGitRepository(directory: string, initialBranch?: string): Promise<void>;
/**
 * Given a Git repository and a list of absolute paths to files contained
 * in the repository, it filters and returns the files that are ignored
 * by the .gitignore.
 *
 * @param directory - The absolute path to the directory containing the files.
 * @param files - The list of files to check against.
 */
export declare function checkIfIgnoredInGitRepository(directory: string, files: string[]): Promise<string[]>;
export interface GitIgnoreTemplate {
    [section: string]: string[];
}
/**
 * Create a .gitignore file in the given directory.
 *
 * @param directory - The directory where the .gitignore file will be created.
 * @param template - The template to use to create the .gitignore file.
 */
export declare function createGitIgnore(directory: string, template: GitIgnoreTemplate): void;
/**
 * Options to use when cloning a git repository.
 *
 * @param repoUrl - The URL of the repository to clone.
 * @param destination - The directory where the repository will be cloned.
 * @param progressUpdater - A function that will be called with the progress of the clone.
 * @param shallow - Whether to clone the repository shallowly.
 * @param latestTag - Whether to clone the latest tag instead of the default branch.
 */
export interface GitCloneOptions {
    repoUrl: string;
    destination: string;
    progressUpdater?: (statusString: string) => void;
    shallow?: boolean;
    latestTag?: boolean;
}
/**
 * Clone a git repository.
 *
 * @param cloneOptions - The options to use to clone the repository.
 * @returns A promise that resolves when the clone is complete.
 */
export declare function downloadGitRepository(cloneOptions: GitCloneOptions): Promise<void>;
/**
 * Get the latest commit of a git repository.
 *
 * @param directory - The directory of the git repository.
 * @returns The latest commit of the repository.
 */
export declare function getLatestGitCommit(directory?: string): Promise<DefaultLogFields & ListLogLine>;
/**
 * Add all files to the git index from the given directory.
 *
 * @param directory - The directory where the git repository is located.
 * @returns A promise that resolves when the files are added to the index.
 */
export declare function addAllToGitFromDirectory(directory?: string): Promise<void>;
export interface CreateGitCommitOptions {
    directory?: string;
    author?: string;
}
/**
 * Create a git commit.
 *
 * @param message - The message of the commit.
 * @param options - The options to use to create the commit.
 * @returns The hash of the created commit.
 */
export declare function createGitCommit(message: string, options?: CreateGitCommitOptions): Promise<string>;
/**
 * Get the HEAD symbolic reference of a git repository.
 *
 * @param directory - The directory of the git repository.
 * @returns The HEAD symbolic reference of the repository.
 */
export declare function getHeadSymbolicRef(directory?: string): Promise<string>;
/**
 * If "git" is not present in the environment it throws
 * an abort error.
 */
export declare function ensureGitIsPresentOrAbort(): Promise<void>;
export declare class OutsideGitDirectoryError extends AbortError {
}
/**
 * If command run from outside a .git directory tree
 * it throws an abort error.
 *
 * @param directory - The directory to check.
 */
export declare function ensureInsideGitDirectory(directory?: string): Promise<void>;
export declare class GitDirectoryNotCleanError extends AbortError {
}
/**
 * If the .git directory tree is not clean (has uncommitted changes)
 * it throws an abort error.
 *
 * @param directory - The directory to check.
 */
export declare function ensureIsClean(directory?: string): Promise<void>;
/**
 * Returns true if the .git directory tree is clean (no uncommitted changes).
 *
 * @param directory - The directory to check.
 */
export declare function isClean(directory?: string): Promise<boolean>;
