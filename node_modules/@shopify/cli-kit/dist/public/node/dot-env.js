import { AbortError } from './error.js';
import { fileExists, readFile, writeFile } from './fs.js';
import { outputDebug, outputContent, outputToken } from '../../public/node/output.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { parse, stringify } from 'envfile';
/**
 * Error that's thrown when the .env is not found.
 * @param path - Path to the .env file.
 * @returns An abort error.
 */
export const DotEnvNotFoundError = (path) => {
    return new AbortError(`The environment file at ${path} does not exist.`);
};
/**
 * Reads and parses a .env file.
 * @param path - Path to the .env file
 * @returns An in-memory representation of the .env file.
 */
export async function readAndParseDotEnv(path) {
    outputDebug(outputContent `Reading the .env file at ${outputToken.path(path)}`);
    if (!(await fileExists(path))) {
        throw DotEnvNotFoundError(path);
    }
    const content = await readFile(path);
    return {
        path,
        variables: parse(content),
    };
}
/**
 * Writes a .env file to disk.
 * @param file - .env file to be written.
 */
export async function writeDotEnv(file) {
    await writeFile(file.path, stringify(file.variables));
}
/**
 * Given an .env file content, generates a new one with new values
 * without removing already existing lines.
 * @param envFileContent - .env file contents.
 * @param updatedValues - object containing new env variables values.
 */
export function patchEnvFile(envFileContent, updatedValues) {
    const outputLines = [];
    const lines = envFileContent === null ? [] : envFileContent.split('\n');
    const alreadyPresentKeys = [];
    const toLine = (key, value) => `${key}=${value}`;
    for (const line of lines) {
        const match = line.match(/^([^=:#]+?)[=:](.*)/);
        let lineToWrite = line;
        if (match) {
            const key = match[1].trim();
            const newValue = updatedValues[key];
            if (newValue) {
                alreadyPresentKeys.push(key);
                lineToWrite = toLine(key, newValue);
            }
        }
        outputLines.push(lineToWrite);
    }
    for (const [patchKey, updatedValue] of Object.entries(updatedValues)) {
        if (!alreadyPresentKeys.includes(patchKey)) {
            outputLines.push(toLine(patchKey, updatedValue));
        }
    }
    return outputLines.join('\n');
}
//# sourceMappingURL=dot-env.js.map