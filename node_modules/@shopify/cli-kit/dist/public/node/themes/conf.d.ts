import { LocalStorage } from '@shopify/cli-kit/node/local-storage';
import { AdminSession } from '@shopify/cli-kit/node/session';
type HostThemeId = string;
type StoreFqdn = AdminSession['storeFqdn'];
interface HostThemeLocalStorageSchema {
    [themeStore: StoreFqdn]: HostThemeId;
}
export declare function hostThemeLocalStorage(): LocalStorage<HostThemeLocalStorageSchema>;
export declare function getHostTheme(storeFqdn: StoreFqdn): string | undefined;
export declare function setHostTheme(storeFqdn: StoreFqdn, themeId: HostThemeId): void;
export declare function removeHostTheme(storeFqdn: StoreFqdn): void;
export {};
