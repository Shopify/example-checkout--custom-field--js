/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Transaction } from './transaction';
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
    limit?: unknown;
    fields?: unknown;
    in_shop_currency?: unknown;
}
interface CalculateArgs {
    [key: string]: unknown;
    shipping?: unknown;
    refund_line_items?: unknown;
    currency?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class Refund extends Base {
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
    static find({ session, id, order_id, fields, in_shop_currency }: FindArgs): Promise<Refund | null>;
    static all({ session, order_id, limit, fields, in_shop_currency, ...otherArgs }: AllArgs): Promise<FindAllResponse<Refund>>;
    calculate({ shipping, refund_line_items, currency, body, ...otherArgs }: CalculateArgs): Promise<unknown>;
    created_at: string | null;
    duties: {
        [key: string]: unknown;
    }[] | null;
    id: number | null;
    note: string | null;
    order_adjustments: {
        [key: string]: unknown;
    }[] | null;
    order_id: number | null;
    processed_at: string | null;
    refund_duties: {
        [key: string]: unknown;
    }[] | null;
    refund_line_items: {
        [key: string]: unknown;
    }[] | null;
    restock: boolean | null;
    transactions: Transaction[] | null | {
        [key: string]: any;
    };
    user_id: number | null;
}
export {};
//# sourceMappingURL=refund.d.ts.map