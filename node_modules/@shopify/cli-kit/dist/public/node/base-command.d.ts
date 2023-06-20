import { Command } from '@oclif/core';
import { FlagOutput, Input, ParserOutput, ArgOutput } from '@oclif/core/lib/interfaces/parser.js';
declare abstract class BaseCommand extends Command {
    static analyticsNameOverride(): string | undefined;
    catch(error: Error & {
        exitCode?: number | undefined;
    }): Promise<void>;
    protected init(): Promise<any>;
    protected exitWithTimestampWhenEnvVariablePresent(): void;
    protected parse<TFlags extends FlagOutput & {
        path?: string;
        verbose?: boolean;
    }, TGlobalFlags extends FlagOutput, TArgs extends ArgOutput>(options?: Input<TFlags, TGlobalFlags, TArgs>, argv?: string[]): Promise<ParserOutput<TFlags, TGlobalFlags, TArgs> & {
        argv: string[];
    }>;
    protected resultWithEnvironment<TFlags extends FlagOutput & {
        path?: string;
        verbose?: boolean;
    }, TGlobalFlags extends FlagOutput, TArgs extends ArgOutput>(originalResult: ParserOutput<TFlags, TGlobalFlags, TArgs>, options?: Input<TFlags, TGlobalFlags, TArgs>, argv?: string[]): Promise<ParserOutput<TFlags, TGlobalFlags, TArgs>>;
    protected environmentsFilename(): string | undefined;
}
export declare function addFromParsedFlags(flags: {
    path?: string;
    verbose?: boolean;
}): Promise<void>;
export default BaseCommand;
