import { Config } from '@oclif/core';
/**
 * Return the name of the tunnel provider used to send analytics. Returns 'localhost' or provider name if any of those
 * strings are included in the {@link tunnelUrl} param. Returns 'custom' otherwise
 *
 * @param options - Oclif configuration. Needed to call the hook for retrieving the list of tunner providers
 * @param tunnelUrl - Tunnel url. Used as pattern to match provider name
 * @returns 'localhost' or provider name if any of those strings are included in
 *  the tunnelUrl or 'custom' otherwise
 */
export declare function getAnalyticsTunnelType(options: Config, tunnelUrl: string): Promise<string | undefined>;
