import { ThemeExtension } from '../../models/app/extensions.js';
export interface ThemeExtensionConfig {
    theme_extension: {
        files: {
            [key: string]: string;
        };
    };
}
export declare function themeExtensionConfig(themeExtension: ThemeExtension): Promise<ThemeExtensionConfig>;
