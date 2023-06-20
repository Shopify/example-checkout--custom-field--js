import { AbortError } from './error.js';
/**
 * Error that's thrown when the .env is not found.
 * @param path - Path to the .env file.
 * @returns An abort error.
 */
export declare const DotEnvNotFoundError: (path: string) => AbortError;
/**
 * This interface represents a .env file.
 */
export interface DotEnvFile {
    /**
     * Path to the .env file.
     */
    path: string;
    /**
     * Variables of the .env file.
     */
    variables: {
        [name: string]: string;
    };
}
/**
 * Reads and parses a .env file.
 * @param path - Path to the .env file
 * @returns An in-memory representation of the .env file.
 */
export declare function readAndParseDotEnv(path: string): Promise<DotEnvFile>;
/**
 * Writes a .env file to disk.
 * @param file - .env file to be written.
 */
export declare function writeDotEnv(file: DotEnvFile): Promise<void>;
/**
 * Given an .env file content, generates a new one with new values
 * without removing already existing lines.
 * @param envFileContent - .env file contents.
 * @param updatedValues - object containing new env variables values.
 */
export declare function patchEnvFile(envFileContent: string | null, updatedValues: {
    [key: string]: string | undefined;
}): string;
