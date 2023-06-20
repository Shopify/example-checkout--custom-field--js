import { ConfigInterface } from '../base-types';
import type { GetCurrentSessionIdParams } from './types';
import { Session } from './session';
export declare function getJwtSessionId(config: ConfigInterface): (shop: string, userId: string) => string;
export declare function getOfflineId(config: ConfigInterface): (shop: string) => string;
export declare function getCurrentSessionId(config: ConfigInterface): ({ isOnline, ...adapterArgs }: GetCurrentSessionIdParams) => Promise<string | undefined>;
export declare function customAppSession(config: ConfigInterface): (shop: string) => Session;
//# sourceMappingURL=session-utils.d.ts.map