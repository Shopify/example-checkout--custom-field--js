import { getHostTheme, removeHostTheme, setHostTheme } from '@shopify/cli-kit/node/themes/conf';
import { ThemeManager } from '@shopify/cli-kit/node/themes/theme-manager';
export class HostThemeManager extends ThemeManager {
    constructor(adminSession) {
        super(adminSession);
        this.context = 'App Ext. Host';
        this.themeId = getHostTheme(adminSession.storeFqdn);
    }
    setTheme(themeId) {
        setHostTheme(this.adminSession.storeFqdn, themeId);
    }
    removeTheme() {
        removeHostTheme(this.adminSession.storeFqdn);
    }
}
//# sourceMappingURL=host-theme-manager.js.map