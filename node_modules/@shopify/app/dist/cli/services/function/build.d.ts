/// <reference types="node" resolution-mode="require"/>
import { FunctionExtension } from '../../models/app/extensions.js';
import { AbortSignal } from '@shopify/cli-kit/node/abort';
import { Writable } from 'stream';
interface JSFunctionBuildOptions {
    stdout: Writable;
    stderr: Writable;
    signal?: AbortSignal;
    useTasks?: boolean;
}
export declare function buildJSFunction(fun: FunctionExtension, options: JSFunctionBuildOptions): Promise<void>;
export declare function buildJSFunctionWithTasks(fun: FunctionExtension, options: JSFunctionBuildOptions): Promise<void>;
export declare function buildGraphqlTypes(fun: {
    directory: string;
    isJavaScript: boolean;
}, options: JSFunctionBuildOptions): Promise<void>;
export declare function bundleExtension(fun: FunctionExtension, options: JSFunctionBuildOptions): Promise<import("esbuild").BuildResult<import("esbuild").BuildOptions>>;
export declare function runJavy(fun: FunctionExtension, options: JSFunctionBuildOptions): Promise<void>;
interface FunctionRunnerOptions {
    json: boolean;
}
export declare function runFunctionRunner(fun: FunctionExtension, options: FunctionRunnerOptions): Promise<void>;
export {};
