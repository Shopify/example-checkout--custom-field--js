import { authenticate } from '../../tunnel.js';
import { Args, Command } from '@oclif/core';
import { outputSuccess } from '@shopify/cli-kit/node/output';
export default class NgrokAuth extends Command {
    async run() {
        const { args } = await this.parse(NgrokAuth);
        await authenticate(args.token);
        outputSuccess('Auth token saved');
    }
}
NgrokAuth.description = 'Saves a token to authenticate against ngrok. Visit https://dashboard.ngrok.com/signup to create an account.';
NgrokAuth.hidden = true;
NgrokAuth.args = { token: Args.string({ required: true }) };
//# sourceMappingURL=auth.js.map