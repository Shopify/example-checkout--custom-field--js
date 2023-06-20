/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Transaction } from './transaction';
import { Checkout } from './checkout';
interface FindArgs {
    session: Session;
    id: number | string;
    checkout_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    checkout_id?: number | string | null;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    checkout_id?: number | string | null;
}
export declare class Payment extends Base {
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
    static find({ session, id, checkout_id }: FindArgs): Promise<Payment | null>;
    static all({ session, checkout_id, ...otherArgs }: AllArgs): Promise<FindAllResponse<Payment>>;
    static count({ session, checkout_id, ...otherArgs }: CountArgs): Promise<unknown>;
    checkout: Checkout | null | {
        [key: string]: any;
    };
    credit_card: {
        [key: string]: unknown;
    } | null;
    id: number | null;
    next_action: {
        [key: string]: unknown;
    } | null;
    payment_processing_error_message: string | null;
    transaction: Transaction | null | {
        [key: string]: any;
    };
    unique_token: string | null;
}
export {};
//# sourceMappingURL=payment.d.ts.map