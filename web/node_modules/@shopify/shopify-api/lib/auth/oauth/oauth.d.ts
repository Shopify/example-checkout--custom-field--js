import { ConfigInterface } from '../../base-types';
import { Session } from '../../session/session';
import { AdapterResponse, AdapterHeaders } from '../../../runtime/http';
import { BeginParams, CallbackParams } from './types';
export interface CallbackResponse<T = AdapterHeaders> {
    headers: T;
    session: Session;
}
export declare function begin(config: ConfigInterface): ({ shop, callbackPath, isOnline, ...adapterArgs }: BeginParams) => Promise<AdapterResponse>;
export declare function callback(config: ConfigInterface): <T = any>({ ...adapterArgs }: CallbackParams) => Promise<CallbackResponse<T>>;
//# sourceMappingURL=oauth.d.ts.map