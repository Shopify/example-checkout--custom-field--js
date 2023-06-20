import { RemoteSource, LocalSource } from './identifiers.js';
import { IdentifiersExtensions } from '../../models/app/identifiers.js';
export interface LocalRemoteSource {
    local: LocalSource;
    remote: RemoteSource;
}
export interface MatchResult {
    identifiers: IdentifiersExtensions;
    toConfirm: LocalRemoteSource[];
    toCreate: LocalSource[];
    toManualMatch: {
        local: LocalSource[];
        remote: RemoteSource[];
    };
}
/**
 * Automatically match local sources to remote sources.
 * If we can't match a local source to any remote sources, we can create it.
 * If we are unsure about the matching we can ask the user to confirm the relationship.
 */
export declare function automaticMatchmaking(localSources: LocalSource[], remoteSources: RemoteSource[], identifiers: IdentifiersExtensions, remoteIdField: 'id' | 'uuid'): Promise<MatchResult>;
export declare function getExtensionIds(localSources: LocalSource[], identifiers: IdentifiersExtensions): IdentifiersExtensions;
