export interface PublicApiVersionsSchema {
    publicApiVersions: string[];
}
/**
 * Requests available api-versions in order to validate flags or present a list of options
 *
 * @param token - Partners session token
 * @returns List of public api-versions
 */
export declare function requestApiVersions(token: string): Promise<string[]>;
