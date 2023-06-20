import { fetchTheme, createTheme } from './themes-api.js';
import { DEVELOPMENT_THEME_ROLE } from './models/theme.js';
import { generateThemeName } from '../../../private/node/themes/generate-theme-name.js';
import { BugError } from '@shopify/cli-kit/node/error';
export class ThemeManager {
    constructor(adminSession) {
        this.adminSession = adminSession;
    }
    async findOrCreate() {
        let theme = await this.fetch();
        if (!theme) {
            theme = await this.create();
        }
        return theme;
    }
    async fetch() {
        if (!this.themeId) {
            return;
        }
        const theme = await fetchTheme(parseInt(this.themeId, 10), this.adminSession);
        if (!theme) {
            this.removeTheme();
        }
        return theme;
    }
    async create() {
        const name = generateThemeName(this.context);
        const role = DEVELOPMENT_THEME_ROLE;
        const theme = await createTheme({
            name,
            role,
        }, this.adminSession);
        if (!theme) {
            throw new BugError(`Could not create theme with name "${name}" and role "${role}"`);
        }
        this.setTheme(theme.id.toString());
        return theme;
    }
}
//# sourceMappingURL=theme-manager.js.map