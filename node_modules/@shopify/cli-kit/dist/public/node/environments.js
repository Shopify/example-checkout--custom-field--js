import { decodeToml } from './toml.js';
import { findPathUp, readFile } from './fs.js';
import { cwd } from './path.js';
import * as metadata from './metadata.js';
import { renderWarning } from './ui.js';
/**
 * Loads environments from a file.
 * @param dir - The file path to load environments from.
 * @returns The loaded environments.
 */
export async function loadEnvironment(environmentName, fileName, options) {
    const basePath = options?.from && options?.from !== '.' ? options.from : cwd();
    const filePath = await findPathUp(fileName, {
        cwd: basePath,
        type: 'file',
    });
    if (!filePath) {
        renderWarning({ body: 'Environment file not found.' });
        return undefined;
    }
    const environmentsJson = decodeToml(await readFile(filePath));
    const environments = environmentsJson.environments;
    if (!environments) {
        renderWarning({
            body: ['No environments found in', { command: filePath }, { char: '.' }],
        });
        return undefined;
    }
    const environment = environments[environmentName];
    if (!environment)
        renderWarning({
            body: ['Environment', { command: environmentName }, 'not found.'],
        });
    await metadata.addSensitiveMetadata(() => ({
        environmentFlags: JSON.stringify(environment),
    }));
    return environment;
}
//# sourceMappingURL=environments.js.map