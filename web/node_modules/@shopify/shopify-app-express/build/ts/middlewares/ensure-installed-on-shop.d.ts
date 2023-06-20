import { AppConfigInterface } from '../config-types';
import { ApiAndConfigParams } from '../types';
import { AppInstallations } from '../app-installations';
import { EnsureInstalledMiddleware } from './types';
interface EnsureInstalledParams extends ApiAndConfigParams {
}
export declare function ensureInstalled({ api, config, }: EnsureInstalledParams): EnsureInstalledMiddleware;
export declare function deleteAppInstallationHandler(appInstallations: AppInstallations, config: AppConfigInterface): (_topic: string, shop: string, _body: any, _webhookId: string) => Promise<void>;
export {};
//# sourceMappingURL=ensure-installed-on-shop.d.ts.map