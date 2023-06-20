/// <reference types="node" resolution-mode="require"/>
import { AppInterface } from '../../models/app/app.js';
import { UIExtension, FunctionExtension, ThemeExtension } from '../../models/app/extensions.js';
import { AbortSignal } from '@shopify/cli-kit/node/abort';
import { OutputProcess } from '@shopify/cli-kit/node/output';
import { Writable } from 'stream';
export interface ExtensionBuildOptions {
    /**
     * Standard output stream to send the output through.
     */
    stdout: Writable;
    /**
     * Standard error stream to send the error output through.
     */
    stderr: Writable;
    /**
     * Signal to abort the build process.
     */
    signal?: AbortSignal;
    /**
     * Overrides the default build directory.
     */
    buildDirectory?: string;
    /**
     * Use tasks to build the extension.
     */
    useTasks?: boolean;
    /**
     * The app that contains the extensions.
     */
    app: AppInterface;
}
export interface ThemeExtensionBuildOptions extends ExtensionBuildOptions {
    /**
     * The UI extensions to be built.
     */
    extensions: ThemeExtension[];
}
/**
 * It builds the theme extensions.
 * @param options - Build options.
 */
export declare function buildThemeExtensions(options: ThemeExtensionBuildOptions): Promise<void>;
interface BuildUIExtensionsOptions {
    app: AppInterface;
}
export declare function buildUIExtensions(options: BuildUIExtensionsOptions): Promise<OutputProcess[]>;
/**
 * It builds the UI extensions.
 * @param options - Build options.
 */
export declare function buildUIExtension(extension: UIExtension, options: ExtensionBuildOptions): Promise<void>;
export interface BuildFunctionExtensionOptions extends ExtensionBuildOptions {
}
/**
 * Builds a function extension
 * @param extension - The function extension to build.
 * @param options - Options to configure the build of the extension.
 */
export declare function buildFunctionExtension(extension: FunctionExtension, options: BuildFunctionExtensionOptions): Promise<void>;
export {};
