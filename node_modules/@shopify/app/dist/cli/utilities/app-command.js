import { configurationFileNames } from '../constants.js';
import Command from '@shopify/cli-kit/node/base-command';
export default class AppCommand extends Command {
    environmentsFilename() {
        return configurationFileNames.appEnvironments;
    }
}
//# sourceMappingURL=app-command.js.map