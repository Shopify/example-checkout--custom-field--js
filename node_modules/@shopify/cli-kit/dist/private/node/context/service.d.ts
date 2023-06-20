/// <reference types="node" resolution-mode="require"/>
/**
 * Enum that represents the environment to use for a given service.
 *
 * @readonly
 */
export declare enum Environment {
    Local = "local",
    Production = "production",
    Spin = "spin"
}
/**
 * Returns the environment to use for a given service.
 *
 * @param env - Environment variables.
 * @returns The environment to use for a given service.
 */
export declare function serviceEnvironment(env?: NodeJS.ProcessEnv): Environment;
