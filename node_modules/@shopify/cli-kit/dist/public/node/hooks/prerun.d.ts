import { Hook } from '@oclif/core';
export declare interface CommandContent {
    command: string;
    topic?: string;
    alias?: string;
}
export declare const hook: Hook.Prerun;
export declare function parseCommandContent(cmdInfo: {
    id: string;
    aliases: string[];
    pluginAlias?: string;
}): CommandContent;
