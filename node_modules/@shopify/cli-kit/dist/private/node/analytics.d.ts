import BaseCommand from '../../public/node/base-command.js';
import { CommandContent } from '../../public/node/hooks/prerun.js';
import { Command, Interfaces } from '@oclif/core';
interface StartOptions {
    commandContent: CommandContent;
    args: string[];
    currentTime?: number;
    commandClass?: Command.Class | typeof BaseCommand;
}
export declare function startAnalytics({ commandContent, args, currentTime, commandClass, }: StartOptions): Promise<void>;
interface EnvironmentData {
    uname: string;
    env_ci: boolean;
    env_ci_platform?: string;
    env_plugin_installed_any_custom: boolean;
    env_plugin_installed_shopify: string;
    env_shell: string;
    env_web_ide: string | undefined;
    env_device_id: string;
    env_cloud: string;
    env_package_manager: string;
}
export declare function getEnvironmentData(config: Interfaces.Config): Promise<EnvironmentData>;
export declare function getSensitiveEnvironmentData(config: Interfaces.Config): Promise<{
    env_plugin_installed_all: string;
}>;
export {};
