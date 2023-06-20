import { Hook } from '@oclif/core';
export declare function findAlternativeCommand(opts: Parameters<Hook.CommandNotFound>[0]): string | undefined;
export declare function shouldRunCommand(result: string, userCommand: string): Promise<boolean>;
declare const hook: Hook.CommandNotFound;
export default hook;
