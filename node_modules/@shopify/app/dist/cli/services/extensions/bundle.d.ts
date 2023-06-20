/// <reference types="node" resolution-mode="require"/>
import { ThemeExtensionBuildOptions } from '../build/extension.js';
import { BuildResult } from 'esbuild';
import { AbortSignal } from '@shopify/cli-kit/node/abort';
import { Writable } from 'stream';
import type { StdinOptions } from 'esbuild';
export interface BundleOptions {
    minify: boolean;
    env: {
        [variable: string]: string;
    };
    outputBundlePath: string;
    stdin: StdinOptions;
    stdout: Writable;
    stderr: Writable;
    /**
     * When provided, the bundling process keeps running and notifying about changes.
     * When ESBuild detects changes in any of the modules of the graph it re-bundles it
     * and calls this watch function.
     */
    watch?: (result: BuildResult | null) => Promise<void>;
    /**
     * This signal allows the caller to stop the watching process.
     */
    watchSignal?: AbortSignal;
    /**
     * Context:
     * When the bundling extension lived in the Go binary, we tied the environment
     * to the workflow being executed (i.e. development when running dev and production
     * when running build) and expoed it through environment variables globally defined
     * by ESBuild. This is a pattern we want to move away from because commands and
     * environments are two different things. However, to do so we need to come up
     * with a migration plan.
     */
    environment: 'development' | 'production';
}
/**
 * Invokes ESBuild with the given options to bundle an extension.
 * @param options - ESBuild options
 */
export declare function bundleExtension(options: BundleOptions): Promise<void>;
export declare function bundleThemeExtensions(options: ThemeExtensionBuildOptions): Promise<void>;
