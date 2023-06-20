import { isSpin } from '../../../public/node/context/spin.js';
import { environmentVariables } from '../constants.js';
/**
 * Enum that represents the environment to use for a given service.
 *
 * @readonly
 */
export var Environment;
(function (Environment) {
    Environment["Local"] = "local";
    Environment["Production"] = "production";
    Environment["Spin"] = "spin";
})(Environment || (Environment = {}));
/**
 * Returns the environment to use for a given service.
 *
 * @param env - Environment variables.
 * @returns The environment to use for a given service.
 */
export function serviceEnvironment(env = process.env) {
    const value = env[environmentVariables.serviceEnv];
    if (value === 'local') {
        return Environment.Local;
    }
    else if (value === 'spin' || isSpin(env)) {
        return Environment.Spin;
    }
    else {
        return Environment.Production;
    }
}
//# sourceMappingURL=service.js.map