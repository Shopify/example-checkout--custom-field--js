import { ExtensionMigrateToUiExtensionVariables } from '../../api/graphql/extension_migrate_to_ui_extension.js';
import { LocalSource, RemoteSource } from '../context/identifiers.js';
import { IdentifiersExtensions } from '../../models/app/identifiers.js';
import { LocalRemoteSource } from '../context/id-matching.js';
export declare function getExtensionsToMigrate(localSources: LocalSource[], remoteSources: RemoteSource[], identifiers: IdentifiersExtensions): LocalRemoteSource[];
export declare function migrateExtensionsToUIExtension(extensionsToMigrate: LocalRemoteSource[], appId: string, remoteExtensions: RemoteSource[]): Promise<RemoteSource[]>;
export declare function migrateExtensionToUIExtension(apiKey: ExtensionMigrateToUiExtensionVariables['apiKey'], registrationId: ExtensionMigrateToUiExtensionVariables['registrationId']): Promise<void>;
