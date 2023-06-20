/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    limit?: unknown;
    since_id?: unknown;
    processed_at_min?: unknown;
    processed_at_max?: unknown;
    processed_at?: unknown;
    order?: unknown;
}
export declare class TenderTransaction extends Base {
    static apiVersion: ApiVersion;
    protected static resourceName: string;
    protected static pluralName: string;
    protected static hasOne: {
        [key: string]: typeof Base;
    };
    protected static hasMany: {
        [key: string]: typeof Base;
    };
    protected static paths: ResourcePath[];
    static all({ session, limit, since_id, processed_at_min, processed_at_max, processed_at, order, ...otherArgs }: AllArgs): Promise<FindAllResponse<TenderTransaction>>;
    amount: string | null;
    currency: string | null;
    id: number | null;
    order_id: number | null;
    payment_details: {
        [key: string]: unknown;
    } | null;
    payment_method: string | null;
    processed_at: string | null;
    remote_reference: string | null;
    test: boolean | null;
    user_id: number | null;
}
export {};
//# sourceMappingURL=tender_transaction.d.ts.map