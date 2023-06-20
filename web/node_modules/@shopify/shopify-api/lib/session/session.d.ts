import { OnlineAccessInfo } from '../auth/oauth/types';
import { AuthScopes } from '../auth/scopes';
import { SessionParams } from './types';
/**
 * Stores App information from logged in merchants so they can make authenticated requests to the Admin API.
 */
export declare class Session {
    static fromPropertyArray(entries: [string, string | number | boolean][]): Session;
    readonly id: string;
    shop: string;
    state: string;
    isOnline: boolean;
    scope?: string;
    expires?: Date;
    accessToken?: string;
    onlineAccessInfo?: OnlineAccessInfo;
    constructor(params: SessionParams);
    isActive(scopes: AuthScopes | string | string[]): boolean;
    toObject(): SessionParams;
    equals(other: Session | undefined): boolean;
    toPropertyArray(): [string, string | number | boolean][];
}
//# sourceMappingURL=session.d.ts.map