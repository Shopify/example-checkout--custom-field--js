import { versionService } from '../services/commands/version.js';
import Command from '@shopify/cli-kit/node/base-command';
export default class Version extends Command {
    async run() {
        await versionService();
    }
}
Version.description = 'Shopify CLI version.';
//# sourceMappingURL=version.js.map