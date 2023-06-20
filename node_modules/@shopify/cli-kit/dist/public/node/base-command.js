import { errorHandler, registerCleanBugsnagErrorsFromWithinPlugins } from './error-handler.js';
import { loadEnvironment } from './environments.js';
import { isDevelopment } from './context/local.js';
import { addPublicMetadata } from './metadata.js';
import { AbortError } from './error.js';
import { renderInfo } from './ui.js';
import { outputContent, outputInfo, outputToken } from '../../public/node/output.js';
import { hashString } from '../../public/node/crypto.js';
import { isTruthy } from '../../private/node/context/utilities.js';
import { Command } from '@oclif/core';
class BaseCommand extends Command {
    static analyticsNameOverride() {
        return undefined;
    }
    async catch(error) {
        errorHandler(error, this.config);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async init() {
        this.exitWithTimestampWhenEnvVariablePresent();
        if (!isDevelopment()) {
            // This function runs just prior to `run`
            await registerCleanBugsnagErrorsFromWithinPlugins(this.config);
        }
        return super.init();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    exitWithTimestampWhenEnvVariablePresent() {
        if (isTruthy(process.env.SHOPIFY_CLI_ENV_STARTUP_PERFORMANCE_RUN)) {
            outputInfo(`
      SHOPIFY_CLI_TIMESTAMP_START
      { "timestamp": ${Date.now()} }
      SHOPIFY_CLI_TIMESTAMP_END
      `);
            process.exit(0);
        }
    }
    async parse(options, argv) {
        let result = await super.parse(options, argv);
        result = await this.resultWithEnvironment(result, options, argv);
        await addFromParsedFlags(result.flags);
        return { ...result, ...{ argv: result.argv } };
    }
    async resultWithEnvironment(originalResult, options, argv) {
        // If no environment is specified, don't modify the results
        const flags = originalResult.flags;
        const environmentsFileName = this.environmentsFilename();
        if (!flags.environment || !environmentsFileName)
            return originalResult;
        // If the specified environment isn't found, don't modify the results
        const environment = await loadEnvironment(flags.environment, environmentsFileName, { from: flags.path });
        if (!environment)
            return originalResult;
        // Parse using noDefaultsOptions to derive a list of flags specified as
        // command-line arguments.
        const noDefaultsResult = await super.parse(noDefaultsOptions(options), argv);
        // Add the environment's settings to argv and pass them to `super.parse`. This
        // invokes oclif's validation system without breaking the oclif black box.
        // Replace the original result with this one.
        const result = await super.parse(options, [
            // Need to specify argv default because we're merging with argsFromEnvironment.
            ...(argv || this.argv),
            ...argsFromEnvironment(environment, options, noDefaultsResult),
        ]);
        // Report successful application of the environment.
        reportEnvironmentApplication(noDefaultsResult.flags, result.flags, flags.environment, environment);
        return result;
    }
    environmentsFilename() {
        // To be re-implemented if needed
        return undefined;
    }
}
export async function addFromParsedFlags(flags) {
    await addPublicMetadata(() => ({
        cmd_all_verbose: flags.verbose,
        cmd_all_path_override: flags.path !== undefined,
        cmd_all_path_override_hash: flags.path === undefined ? undefined : hashString(flags.path),
    }));
}
/**
 * Any flag which is:
 *
 * 1. Present in the final set of flags
 * 2. Specified in the environment
 * 3. Not specified by the user as a command line argument
 *
 * should be reported.
 *
 * It doesn't matter if the environment flag's value was the same as the default; from
 * the user's perspective, they want to know their environment was applied.
 */
function reportEnvironmentApplication(noDefaultsFlags, flagsWithEnvironments, environmentName, environment) {
    const changes = {};
    for (const [name, value] of Object.entries(flagsWithEnvironments)) {
        const userSpecifiedThisFlag = Object.prototype.hasOwnProperty.call(noDefaultsFlags, name);
        const environmentContainsFlag = Object.prototype.hasOwnProperty.call(environment, name);
        if (!userSpecifiedThisFlag && environmentContainsFlag) {
            const valueToReport = name === 'password' ? `********${value.substr(-4)}` : value;
            changes[name] = valueToReport;
        }
    }
    if (Object.keys(changes).length === 0)
        return;
    const items = Object.entries(changes).map(([name, value]) => `${name}: ${value}`);
    renderInfo({
        headline: ['Using applicable flags from', { userInput: environmentName }, 'environment:'],
        body: [{ list: { items } }],
    });
}
/**
 * Strips the defaults from configured flags. For example, if flags contains:
 *
 * ```
 *   someFlag: Flags.boolean({
 *     description: 'some flag',
 *     default: false
 *   })
 * ```
 *
 * it becomes:
 *
 * ```
 *   someFlag: Flags.boolean({
 *     description: 'some flag'
 *   })
 * ```
 *
 * If we parse using this configuration, the only specified flags will be those
 * the user actually passed on the command line.
 */
function noDefaultsOptions(options) {
    if (!options?.flags)
        return options;
    return {
        ...options,
        flags: Object.fromEntries(Object.entries(options.flags).map(([label, settings]) => {
            const copiedSettings = { ...settings };
            delete copiedSettings.default;
            return [label, copiedSettings];
        })),
    };
}
/**
 * Converts the environment's settings to arguments as though passed on the command
 * line, skipping any arguments the user specified on the command line.
 */
function argsFromEnvironment(environment, options, noDefaultsResult) {
    const args = [];
    for (const [label, value] of Object.entries(environment)) {
        const flagIsRelevantToCommand = options?.flags && Object.prototype.hasOwnProperty.call(options.flags, label);
        const userSpecifiedThisFlag = noDefaultsResult.flags && Object.prototype.hasOwnProperty.call(noDefaultsResult.flags, label);
        if (flagIsRelevantToCommand && !userSpecifiedThisFlag) {
            if (typeof value === 'boolean') {
                if (value === true) {
                    args.push(`--${label}`);
                }
                else {
                    throw new AbortError(outputContent `Environments can only specify true for boolean flags. Attempted to set ${outputToken.yellow(label)} to false.`);
                }
            }
            else if (Array.isArray(value)) {
                value.forEach((element) => args.push(`--${label}`, `${element}`));
            }
            else {
                args.push(`--${label}`, `${value}`);
            }
        }
    }
    return args;
}
export default BaseCommand;
//# sourceMappingURL=base-command.js.map