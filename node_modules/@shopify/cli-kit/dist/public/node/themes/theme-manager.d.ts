import { Theme } from './models/theme.js';
import { AdminSession } from '@shopify/cli-kit/node/session';
export declare abstract class ThemeManager {
    protected adminSession: AdminSession;
    protected themeId: string | undefined;
    protected abstract setTheme(themeId: string): void;
    protected abstract removeTheme(): void;
    protected abstract context: string;
    constructor(adminSession: AdminSession);
    findOrCreate(): Promise<Theme>;
    fetch(): Promise<Theme | undefined>;
    private create;
}
