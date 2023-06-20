import { LocalStorage } from '@shopify/cli-kit/node/local-storage';
import { outputDebug, outputContent } from '@shopify/cli-kit/node/output';
let _hostThemeLocalStorageInstance;
export function hostThemeLocalStorage() {
    if (!_hostThemeLocalStorageInstance) {
        _hostThemeLocalStorageInstance = new LocalStorage({
            projectName: 'shopify-cli-host-theme-conf',
        });
    }
    return _hostThemeLocalStorageInstance;
}
export function getHostTheme(storeFqdn) {
    outputDebug(outputContent `Getting host theme...`);
    return hostThemeLocalStorage().get(storeFqdn);
}
export function setHostTheme(storeFqdn, themeId) {
    outputDebug(outputContent `Setting host theme...`);
    hostThemeLocalStorage().set(storeFqdn, themeId);
}
export function removeHostTheme(storeFqdn) {
    outputDebug(outputContent `Removing host theme...`);
    hostThemeLocalStorage().delete(storeFqdn);
}
//# sourceMappingURL=conf.js.map