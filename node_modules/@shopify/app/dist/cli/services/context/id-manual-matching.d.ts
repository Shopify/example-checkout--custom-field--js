import { LocalSource, RemoteSource } from './identifiers.js';
import { IdentifiersExtensions } from '../../models/app/identifiers.js';
export interface ManualMatchResult {
    identifiers: IdentifiersExtensions;
    toCreate: LocalSource[];
    onlyRemote: RemoteSource[];
}
/**
 * Prompt the user to manually match each of the local sources to a remote source.
 * Sources can either be extensions or functions.
 *
 * The user can also select to create a new remote source instead of selecting an existing one.
 * Manual matching will only show sources of the same type as possible matches.
 * At the end of this process, all remote sources must be matched with the local sources to succeed.
 *
 * @param local - The local sources to match
 * @param remote - The remote sources to match
 * @returns The result of the manual matching
 */
export declare function manualMatchIds(options: {
    local: LocalSource[];
    remote: RemoteSource[];
}, remoteIdField: 'id' | 'uuid'): Promise<ManualMatchResult>;
