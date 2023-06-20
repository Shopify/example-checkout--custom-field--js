/// <reference types="node" resolution-mode="require"/>
/**
 * Generate a random string in Hex format of the provided size.
 *
 * @param size - Number of bytes to be generated.
 * @returns A random string in Hex format.
 */
export declare function randomHex(size: number): string;
/**
 * Encode a string in Base64 valid for URLs.
 *
 * @param str - The string to encode.
 * @returns The encoded string.
 */
export declare function base64URLEncode(str: Buffer): string;
/**
 * Generate the SHA256 hash of a string.
 *
 * @param str - The string to hash.
 * @returns The SHA256 hash of the string.
 */
export declare function sha256(str: string): Buffer;
/**
 * Generate the SHA1 hash of a string.
 *
 * @param str - The string to hash.
 * @returns The SHA1 hash of the string.
 */
export declare function hashString(str: string): string;
/**
 * Generate an MD5 hash of a buffer.
 *
 * @param buff - The file buffer to hash.
 * @returns A string containing the MD5 hash.
 */
export declare function fileHash(buff: Buffer): string;
/**
 * Generate random data of the provided size.
 *
 * @param size - Number of bytes to be generated.
 * @returns A buffer of random data.
 */
export declare function randomBytes(size: number): Buffer;
/**
 * Generate a random UUID string.
 *
 * @returns A random UUID string.
 */
export declare function randomUUID(): string;
