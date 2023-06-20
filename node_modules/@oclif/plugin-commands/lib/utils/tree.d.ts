import { Command } from '@oclif/core';
import { Tree } from '@oclif/core/lib/cli-ux/styled/tree';
declare const createCommandTree: (commands: Command.Loadable[], topicSeparator?: string) => Tree;
export default createCommandTree;
