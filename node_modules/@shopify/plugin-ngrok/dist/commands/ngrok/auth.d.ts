import { Command } from '@oclif/core';
export default class NgrokAuth extends Command {
    static description: string;
    static hidden: boolean;
    static args: {
        token: import("@oclif/core/lib/interfaces/parser.js").Arg<string, Record<string, unknown>>;
    };
    run(): Promise<void>;
}
