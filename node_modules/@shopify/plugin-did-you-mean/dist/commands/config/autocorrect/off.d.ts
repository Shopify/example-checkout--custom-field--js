import Command from '@shopify/cli-kit/node/base-command';
export default class AutocorrectOff extends Command {
    static description: string;
    run(): Promise<void>;
}
