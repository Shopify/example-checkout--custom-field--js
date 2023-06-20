/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
interface FindArgs {
    session: Session;
    id: number | string;
    order_id?: number | string | null;
    fields?: unknown;
    in_shop_currency?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    order_id?: number | string | null;
    since_id?: unknown;
    fields?: unknown;
    in_shop_currency?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    order_id?: number | string | null;
}
export declare class Transaction extends Base {
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
    static find({ session, id, order_id, fields, in_shop_currency }: FindArgs): Promise<Transaction | null>;
    static all({ session, order_id, since_id, fields, in_shop_currency, ...otherArgs }: AllArgs): Promise<FindAllResponse<Transaction>>;
    static count({ session, order_id, ...otherArgs }: CountArgs): Promise<unknown>;
    kind: string | null;
    amount: string | null;
    authorization: string | null;
    authorization_expires_at: string | null;
    created_at: string | null;
    currency: string | null;
    currency_exchange_adjustment: {
        [key: string]: unknown;
    } | null;
    device_id: number | null;
    error_code: string | null;
    extended_authorization_attributes: {
        [key: string]: unknown;
    } | null;
    gateway: string | null;
    id: number | null;
    location_id: number | null;
    message: string | null;
    order_id: number | null;
    parent_id: number | null;
    payment_details: {
        [key: string]: unknown;
    } | null;
    payments_refund_attributes: {
        [key: string]: unknown;
    } | null;
    processed_at: string | null;
    receipt: {
        [key: string]: unknown;
    } | null;
    source_name: string | null;
    status: string | null;
    test: boolean | null;
    user_id: number | null;
}
export {};
//# sourceMappingURL=transaction.d.ts.map