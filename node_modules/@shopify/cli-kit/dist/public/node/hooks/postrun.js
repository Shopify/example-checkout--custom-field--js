import { postrun as deprecationsHook } from './deprecations.js';
import { reportAnalyticsEvent } from '../analytics.js';
import { outputDebug } from '../../../public/node/output.js';
// This hook is called after each successful command run. More info: https://oclif.io/docs/hooks
export const hook = async ({ config, Command }) => {
    await reportAnalyticsEvent({ config });
    deprecationsHook(Command);
    const command = Command?.id?.replace(/:/g, ' ');
    outputDebug(`Completed command ${command}`);
};
//# sourceMappingURL=postrun.js.map