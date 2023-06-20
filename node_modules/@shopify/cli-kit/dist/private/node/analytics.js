import { hashString } from '../../public/node/crypto.js';
import { getPackageManager, packageManagerUsedForCreating } from '../../public/node/node-package-manager.js';
import * as metadata from '../../public/node/metadata.js';
import { platformAndArch } from '../../public/node/os.js';
import { ciPlatform, cloudEnvironment, macAddress } from '@shopify/cli-kit/node/context/local';
import { cwd } from '@shopify/cli-kit/node/path';
export async function startAnalytics({ commandContent, args, currentTime = new Date().getTime(), commandClass, }) {
    let startCommand = commandContent.command;
    if (commandClass && Object.prototype.hasOwnProperty.call(commandClass, 'analyticsNameOverride')) {
        startCommand = commandClass.analyticsNameOverride() ?? commandContent.command;
    }
    await metadata.addSensitiveMetadata(() => ({
        commandStartOptions: {
            startTime: currentTime,
            startCommand,
            startArgs: args,
        },
    }));
    await metadata.addPublicMetadata(() => ({
        cmd_all_launcher: packageManagerUsedForCreating(),
        cmd_all_alias_used: commandContent.alias,
        cmd_all_topic: commandContent.topic,
        cmd_all_plugin: commandClass?.plugin?.name,
    }));
}
export async function getEnvironmentData(config) {
    const ciplatform = ciPlatform();
    const pluginNames = getPluginNames(config);
    const shopifyPlugins = pluginNames.filter((plugin) => plugin.startsWith('@shopify/'));
    const { platform, arch } = platformAndArch();
    return {
        uname: `${platform} ${arch}`,
        env_ci: ciplatform.isCI,
        env_ci_platform: ciplatform.name,
        env_plugin_installed_any_custom: pluginNames.length !== shopifyPlugins.length,
        env_plugin_installed_shopify: JSON.stringify(shopifyPlugins),
        env_shell: config.shell,
        env_web_ide: cloudEnvironment().editor ? cloudEnvironment().platform : undefined,
        env_device_id: hashString(await macAddress()),
        env_cloud: cloudEnvironment().platform,
        env_package_manager: await getPackageManager(cwd()),
    };
}
export async function getSensitiveEnvironmentData(config) {
    return {
        env_plugin_installed_all: JSON.stringify(getPluginNames(config)),
    };
}
function getPluginNames(config) {
    return config.plugins
        .map((plugin) => plugin.name)
        .sort()
        .filter((plugin) => !plugin.startsWith('@oclif/'));
}
//# sourceMappingURL=analytics.js.map