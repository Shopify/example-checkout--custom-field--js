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
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    status?: unknown;
    limit?: unknown;
    since_id?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    status?: unknown;
}
interface SearchArgs {
    [key: string]: unknown;
    session: Session;
    order?: unknown;
    query?: unknown;
    limit?: unknown;
    fields?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
}
interface DisableArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class GiftCard extends Base {
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
    static find({ session, id }: FindArgs): Promise<GiftCard | null>;
    static all({ session, status, limit, since_id, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<GiftCard>>;
    static count({ session, status, ...otherArgs }: CountArgs): Promise<unknown>;
    static search({ session, order, query, limit, fields, created_at_min, created_at_max, updated_at_min, updated_at_max, ...otherArgs }: SearchArgs): Promise<unknown>;
    disable({ body, ...otherArgs }: DisableArgs): Promise<unknown>;
    api_client_id: number | null;
    balance: number | null;
    code: string | null;
    created_at: string | null;
    currency: string | null;
    customer_id: number | null;
    disabled_at: string | null;
    expires_on: string | null;
    id: number | null;
    initial_value: number | null;
    last_characters: string | null;
    line_item_id: number | null;
    note: string | null;
    order_id: number | null;
    template_suffix: string | null;
    updated_at: string | null;
    user_id: number | null;
}
export {};
//# sourceMappingURL=gift_card.d.ts.map