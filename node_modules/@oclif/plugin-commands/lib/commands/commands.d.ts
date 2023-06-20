import { Command } from '@oclif/core';
export default class Commands extends Command {
    static description: string;
    static enableJsonFlag: boolean;
    static flags: {
        columns: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        sort: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        filter: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        csv: import("@oclif/core/lib/interfaces").Flag<boolean>;
        output: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser").CustomOptions>;
        extended: import("@oclif/core/lib/interfaces").Flag<boolean>;
        'no-truncate': import("@oclif/core/lib/interfaces").Flag<boolean>;
        'no-header': import("@oclif/core/lib/interfaces").Flag<boolean>;
        help: import("@oclif/core/lib/interfaces").BooleanFlag<void>;
        hidden: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
        tree: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
    };
    run(): Promise<unknown[] | import("@oclif/core/lib/cli-ux/styled/tree").Tree | undefined>;
    private getCommands;
    private removeCycles;
}
