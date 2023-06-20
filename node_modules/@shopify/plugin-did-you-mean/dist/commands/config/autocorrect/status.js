import { autocorrectStatus } from '../../../services/constants.js';
import { isAutocorrectEnabled } from '../../../services/conf.js';
import Command from '@shopify/cli-kit/node/base-command';
import { renderInfo } from '@shopify/cli-kit/node/ui';
export default class AutocorrectStatus extends Command {
    async run() {
        if (isAutocorrectEnabled()) {
            renderInfo({ body: autocorrectStatus.on });
        }
        else {
            renderInfo({ body: autocorrectStatus.off });
        }
    }
}
AutocorrectStatus.description = 'Check autocorrect current status.';
//# sourceMappingURL=status.js.map