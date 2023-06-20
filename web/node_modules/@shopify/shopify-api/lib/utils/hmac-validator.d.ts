import { ConfigInterface } from '../base-types';
import { AuthQuery } from '../auth/oauth/types';
export declare function generateLocalHmac(config: ConfigInterface): (params: AuthQuery) => Promise<string>;
export declare function validateHmac(config: ConfigInterface): (query: AuthQuery) => Promise<boolean>;
export declare function getCurrentTimeInSec(): number;
//# sourceMappingURL=hmac-validator.d.ts.map