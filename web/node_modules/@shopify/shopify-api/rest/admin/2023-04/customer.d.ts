/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Metafield } from './metafield';
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
    ids?: unknown;
    since_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    limit?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
}
interface OrdersArgs {
    [key: string]: unknown;
    session: Session;
    id: number | string;
    status?: unknown;
}
interface SearchArgs {
    [key: string]: unknown;
    session: Session;
    order?: unknown;
    query?: unknown;
    limit?: unknown;
    fields?: unknown;
}
interface AccountActivationUrlArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface SendInviteArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class Customer extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Customer | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, ids, since_id, created_at_min, created_at_max, updated_at_min, updated_at_max, limit, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<Customer>>;
    static count({ session, created_at_min, created_at_max, updated_at_min, updated_at_max, ...otherArgs }: CountArgs): Promise<unknown>;
    static orders({ session, id, status, ...otherArgs }: OrdersArgs): Promise<unknown>;
    static search({ session, order, query, limit, fields, ...otherArgs }: SearchArgs): Promise<unknown>;
    account_activation_url({ body, ...otherArgs }: AccountActivationUrlArgs): Promise<unknown>;
    send_invite({ body, ...otherArgs }: SendInviteArgs): Promise<unknown>;
    accepts_marketing: boolean | null;
    accepts_marketing_updated_at: string | null;
    addresses: {
        [key: string]: unknown;
    }[] | null;
    created_at: string | null;
    currency: string | null;
    default_address: {
        [key: string]: unknown;
    } | null;
    email: string | null;
    email_marketing_consent: {
        [key: string]: unknown;
    } | null;
    first_name: string | null;
    id: number | null;
    last_name: string | null;
    last_order_id: number | null;
    last_order_name: string | null;
    marketing_opt_in_level: string | null;
    metafield: Metafield | null | {
        [key: string]: any;
    };
    multipass_identifier: string | null;
    note: string | null;
    orders_count: number | null;
    password: string | null;
    password_confirmation: string | null;
    phone: string | null;
    sms_marketing_consent: {
        [key: string]: unknown;
    } | null;
    state: string | null;
    tags: string | null;
    tax_exempt: boolean | null;
    tax_exemptions: string[] | null;
    total_spent: string | null;
    updated_at: string | null;
    verified_email: boolean | null;
}
export {};
//# sourceMappingURL=customer.d.ts.map