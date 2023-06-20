/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Customer } from './customer';
interface FindArgs {
    session: Session;
    id: number | string;
    fields?: unknown;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    fields?: unknown;
    limit?: unknown;
    since_id?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    ids?: unknown;
    status?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    since_id?: unknown;
    status?: unknown;
    updated_at_max?: unknown;
    updated_at_min?: unknown;
}
interface SendInvoiceArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface CompleteArgs {
    [key: string]: unknown;
    payment_gateway_id?: unknown;
    payment_pending?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class DraftOrder extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<DraftOrder | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, fields, limit, since_id, updated_at_min, updated_at_max, ids, status, ...otherArgs }: AllArgs): Promise<FindAllResponse<DraftOrder>>;
    static count({ session, since_id, status, updated_at_max, updated_at_min, ...otherArgs }: CountArgs): Promise<unknown>;
    send_invoice({ body, ...otherArgs }: SendInvoiceArgs): Promise<unknown>;
    complete({ payment_gateway_id, payment_pending, body, ...otherArgs }: CompleteArgs): Promise<unknown>;
    applied_discount: {
        [key: string]: unknown;
    } | null;
    billing_address: {
        [key: string]: unknown;
    } | null;
    completed_at: string | null;
    created_at: string | null;
    currency: string | null;
    customer: Customer | null | {
        [key: string]: any;
    };
    email: string | null;
    id: number | null;
    invoice_sent_at: string | null;
    invoice_url: string | null;
    line_items: {
        [key: string]: unknown;
    }[] | null;
    name: string | null;
    note: string | null;
    note_attributes: {
        [key: string]: unknown;
    }[] | null;
    order_id: number | null;
    payment_terms: {
        [key: string]: unknown;
    } | null;
    shipping_address: {
        [key: string]: unknown;
    } | null;
    shipping_line: {
        [key: string]: unknown;
    } | null;
    source_name: string | null;
    status: string | null;
    subtotal_price: number | null;
    tags: string | null;
    tax_exempt: boolean | null;
    tax_exemptions: string[] | null;
    tax_lines: {
        [key: string]: unknown;
    }[] | null;
    taxes_included: boolean | null;
    total_price: string | null;
    total_tax: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=draft_order.d.ts.map