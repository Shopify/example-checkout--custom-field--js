/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Currency } from './currency';
interface TransactionsArgs {
    [key: string]: unknown;
    session: Session;
    since_id?: unknown;
    last_id?: unknown;
    test?: unknown;
    payout_id?: unknown;
    payout_status?: unknown;
}
export declare class PaymentTransaction extends Base {
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
    static transactions({ session, since_id, last_id, test, payout_id, payout_status, ...otherArgs }: TransactionsArgs): Promise<unknown>;
    amount: string | null;
    currency: Currency | null | {
        [key: string]: any;
    };
    fee: string | null;
    id: number | null;
    net: string | null;
    payout_id: number | null;
    payout_status: string | null;
    processed_at: string | null;
    source_id: number | null;
    source_order_id: number | null;
    source_order_transaction_id: number | null;
    source_type: string | null;
    test: boolean | null;
    type: string | null;
}
export {};
//# sourceMappingURL=payment_transaction.d.ts.map