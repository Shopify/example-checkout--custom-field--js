import Command from '@shopify/cli-kit/node/base-command';
export default class AutocorrectOn extends Command {
    static description: string;
    run(): Promise<void>;
}
