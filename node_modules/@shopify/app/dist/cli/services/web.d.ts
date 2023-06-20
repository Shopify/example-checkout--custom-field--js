/// <reference types="node" resolution-mode="require"/>
import { Web, WebConfigurationCommands } from '../models/app/app.js';
import { AbortSignal } from '@shopify/cli-kit/node/abort';
import { Writable } from 'stream';
interface WebOptions {
    web: Web;
    stdout: Writable;
    stderr: Writable;
    signal: AbortSignal;
    env?: {
        [variable: string]: string;
    };
}
export default function web(command: WebConfigurationCommands, { web, stdout, stderr, signal, env }: WebOptions): Promise<void>;
export {};
