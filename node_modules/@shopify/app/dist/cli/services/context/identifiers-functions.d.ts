import { EnsureDeploymentIdsPresenceOptions, MatchingError, RemoteSource } from './identifiers.js';
import { IdentifiersExtensions } from '../../models/app/identifiers.js';
import { Result } from '@shopify/cli-kit/node/result';
export declare function ensureFunctionsIds(options: EnsureDeploymentIdsPresenceOptions, remoteFunctions: RemoteSource[]): Promise<Result<IdentifiersExtensions, MatchingError>>;
