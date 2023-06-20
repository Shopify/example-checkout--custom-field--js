import { DevNewExtensionPointSchema, UIExtensionPayload } from './payload/models.js';
import { ExtensionDevOptions } from '../extension.js';
import { UIExtension } from '../../../models/app/extensions.js';
export type GetUIExtensionPayloadOptions = ExtensionDevOptions & {
    currentDevelopmentPayload?: Partial<UIExtensionPayload['development']>;
    currentLocalizationPayload?: UIExtensionPayload['localization'];
};
export declare function getUIExtensionPayload(extension: UIExtension, options: GetUIExtensionPayloadOptions): Promise<UIExtensionPayload>;
export declare function isNewExtensionPointsSchema(extensionPoints: unknown): extensionPoints is DevNewExtensionPointSchema[];
