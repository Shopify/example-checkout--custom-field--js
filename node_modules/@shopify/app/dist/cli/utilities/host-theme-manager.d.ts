import { ThemeManager } from '@shopify/cli-kit/node/themes/theme-manager';
import { AdminSession } from '@shopify/cli-kit/node/session';
export declare class HostThemeManager extends ThemeManager {
    protected context: string;
    constructor(adminSession: AdminSession);
    protected setTheme(themeId: string): void;
    protected removeTheme(): void;
}
