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
    fields?: unknown;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    limit?: unknown;
    ids?: unknown;
    since_id?: unknown;
    title?: unknown;
    product_id?: unknown;
    handle?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    published_status?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    title?: unknown;
    product_id?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    published_status?: unknown;
}
interface OrderArgs {
    [key: string]: unknown;
    products?: unknown;
    sort_order?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class SmartCollection extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<SmartCollection | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, limit, ids, since_id, title, product_id, handle, updated_at_min, updated_at_max, published_at_min, published_at_max, published_status, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<SmartCollection>>;
    static count({ session, title, product_id, updated_at_min, updated_at_max, published_at_min, published_at_max, published_status, ...otherArgs }: CountArgs): Promise<unknown>;
    order({ products, sort_order, body, ...otherArgs }: OrderArgs): Promise<unknown>;
    rules: {
        [key: string]: unknown;
    } | {
        [key: string]: unknown;
    }[] | null;
    title: string | null;
    body_html: string | null;
    disjunctive: boolean | null;
    handle: string | null;
    id: number | null;
    image: string | {
        [key: string]: unknown;
    } | null;
    published_at: string | null;
    published_scope: string | null;
    sort_order: string | null;
    template_suffix: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=smart_collection.d.ts.map