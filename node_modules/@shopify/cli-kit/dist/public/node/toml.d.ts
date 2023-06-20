import * as toml from '@iarna/toml';
/**
 * Given a TOML string, it returns a JSON object.
 *
 * @param input - TOML string.
 * @returns JSON object.
 */
export declare function decodeToml(input: string): object;
/**
 * Given a JSON object, it returns a TOML string.
 *
 * @param content - JSON object.
 * @returns TOML string.
 */
export declare function encodeToml(content: toml.JsonMap): string;
