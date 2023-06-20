import { UIExtension } from '../../../../models/app/extensions.js';
import { ExtensionDevOptions } from '../../extension.js';
import { H3Error, ServerResponse } from 'h3';
export declare function getRedirectUrl(extension: UIExtension, options: ExtensionDevOptions): string;
export declare function getExtensionPointRedirectUrl(requestedTarget: string, extension: UIExtension, options: ExtensionDevOptions): string | undefined;
export declare function getExtensionUrl(extension: UIExtension, options: ExtensionDevOptions): string;
export declare function sendError(response: ServerResponse, error: Partial<H3Error>): void;
