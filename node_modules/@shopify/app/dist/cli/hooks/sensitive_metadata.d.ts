import { FanoutHookFunction } from '@shopify/cli-kit/node/plugins';
declare const gatherSensitiveMetadata: FanoutHookFunction<'sensitive_command_metadata', '@shopify/app'>;
export default gatherSensitiveMetadata;
