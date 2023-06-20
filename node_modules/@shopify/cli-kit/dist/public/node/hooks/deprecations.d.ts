import { Command } from '@oclif/core';
/**
 * After a successful command run, renders an upgrade warning if `nextDeprecationDate` is present.
 *
 * @param Command - The class of the command that was run.
 */
export declare const postrun: (Command: Command.Class) => void;
