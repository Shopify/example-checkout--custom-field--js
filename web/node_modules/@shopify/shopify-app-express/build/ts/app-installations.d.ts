import { AppConfigInterface } from './config-types';
export declare class AppInstallations {
    private sessionStorage;
    constructor(config: AppConfigInterface);
    includes(shopDomain: string): Promise<boolean>;
    delete(shopDomain: string): Promise<void>;
}
//# sourceMappingURL=app-installations.d.ts.map