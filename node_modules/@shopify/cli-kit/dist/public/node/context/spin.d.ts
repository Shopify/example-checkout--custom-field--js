/// <reference types="node" resolution-mode="require"/>
/**
 * When ran in a Spin environment, it returns the fqdn of the instance.
 *
 * Will cache the value of the Spin FQDN during the execution of the CLI.
 * To avoid multiple calls to `readSync` or `show`.
 *
 * @param env - Environment variables.
 * @returns Fqdn of the Spin environment.
 */
export declare function spinFqdn(env?: NodeJS.ProcessEnv): Promise<string>;
/**
 * Runs "spin show" and returns the JSON-parsed output.
 *
 * @param spinInstance - When it's undefined, we'll fetch the latest one.
 * @param env - Environment variables.
 * @returns The JSON-parsed output of the Spin CLI.
 * @throws Any error raised from the underlying Spin CLI.
 */
export declare function show(spinInstance: string | undefined, env?: NodeJS.ProcessEnv): Promise<{
    fqdn: string;
}>;
/**
 * Returns true if the CLI is running in a Spin environment.
 *
 * @param env - Environment variables.
 * @returns True if the CLI is running in a Spin environment.
 */
export declare function isSpin(env?: NodeJS.ProcessEnv): boolean;
/**
 * Returns the value of the SPIN_INSTANCE environment variable.
 *
 * @param env - Environment variables.
 * @returns The value of the SPIN_INSTANCE environment variable.
 */
export declare function instance(env?: NodeJS.ProcessEnv): string | undefined;
/**
 * Returns true if the CLI is running in a Spin environment.
 *
 * @param env - Environment variables.
 * @returns True if the CLI is running in a Spin environment.
 */
export declare function isSpinEnvironment(env?: NodeJS.ProcessEnv): boolean;
/**
 * Returns the value of the SERVER_PORT environment variable.
 *
 * @param env - Environment variables.
 * @returns The value of the SERVER_PORT environment variable.
 */
export declare function appPort(env?: NodeJS.ProcessEnv): number | undefined;
/**
 * Returns the value of the SPIN_APP_HOST environment variable.
 *
 * @param env - Environment variables.
 * @returns The value of the SPIN_APP_HOST environment variable.
 */
export declare function appHost(env?: NodeJS.ProcessEnv): string | undefined;
