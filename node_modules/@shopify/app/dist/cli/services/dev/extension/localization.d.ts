import { ExtensionAssetBuildStatus } from './payload/models.js';
import { GetUIExtensionPayloadOptions } from './payload.js';
import { UIExtension } from '../../../models/app/extensions.js';
export type Locale = string;
export interface Localization {
    defaultLocale: Locale;
    translations: {
        [key: Locale]: {
            [key: string]: string;
        };
    };
    lastUpdated: number;
}
export declare function getLocalizationFilePaths(extension: UIExtension): Promise<string[]>;
export declare function getLocalization(extension: UIExtension, options: GetUIExtensionPayloadOptions): Promise<{
    localization: Localization | undefined;
    status: ExtensionAssetBuildStatus;
}>;
