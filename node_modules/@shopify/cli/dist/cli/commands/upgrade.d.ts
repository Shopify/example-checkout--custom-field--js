import Command from '@shopify/cli-kit/node/base-command';
export default class Upgrade extends Command {
    static description: string;
    static flags: {
        path: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
    };
    run(): Promise<void>;
}
