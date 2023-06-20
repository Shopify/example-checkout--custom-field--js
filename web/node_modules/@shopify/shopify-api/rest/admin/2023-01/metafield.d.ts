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
    article_id?: number | string | null;
    blog_id?: number | string | null;
    collection_id?: number | string | null;
    customer_id?: number | string | null;
    draft_order_id?: number | string | null;
    order_id?: number | string | null;
    page_id?: number | string | null;
    product_image_id?: number | string | null;
    product_id?: number | string | null;
    variant_id?: number | string | null;
    fields?: unknown;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
    article_id?: number | string | null;
    blog_id?: number | string | null;
    collection_id?: number | string | null;
    customer_id?: number | string | null;
    draft_order_id?: number | string | null;
    order_id?: number | string | null;
    page_id?: number | string | null;
    product_image_id?: number | string | null;
    product_id?: number | string | null;
    variant_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    article_id?: number | string | null;
    blog_id?: number | string | null;
    collection_id?: number | string | null;
    customer_id?: number | string | null;
    draft_order_id?: number | string | null;
    order_id?: number | string | null;
    page_id?: number | string | null;
    product_image_id?: number | string | null;
    product_id?: number | string | null;
    variant_id?: number | string | null;
    limit?: unknown;
    since_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    namespace?: unknown;
    key?: unknown;
    type?: unknown;
    fields?: unknown;
    metafield?: {
        [key: string]: unknown;
    } | null;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    article_id?: number | string | null;
    blog_id?: number | string | null;
    collection_id?: number | string | null;
    customer_id?: number | string | null;
    draft_order_id?: number | string | null;
    order_id?: number | string | null;
    page_id?: number | string | null;
    product_image_id?: number | string | null;
    product_id?: number | string | null;
    variant_id?: number | string | null;
}
export declare class Metafield extends Base {
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
    static find({ session, id, article_id, blog_id, collection_id, customer_id, draft_order_id, order_id, page_id, product_image_id, product_id, variant_id, fields }: FindArgs): Promise<Metafield | null>;
    static delete({ session, id, article_id, blog_id, collection_id, customer_id, draft_order_id, order_id, page_id, product_image_id, product_id, variant_id }: DeleteArgs): Promise<unknown>;
    static all({ session, article_id, blog_id, collection_id, customer_id, draft_order_id, order_id, page_id, product_image_id, product_id, variant_id, limit, since_id, created_at_min, created_at_max, updated_at_min, updated_at_max, namespace, key, type, fields, metafield, ...otherArgs }: AllArgs): Promise<FindAllResponse<Metafield>>;
    static count({ session, article_id, blog_id, collection_id, customer_id, draft_order_id, order_id, page_id, product_image_id, product_id, variant_id, ...otherArgs }: CountArgs): Promise<unknown>;
    key: string | null;
    namespace: string | null;
    value: string | number | number | boolean | string | null;
    article_id: number | null;
    blog_id: number | null;
    collection_id: number | null;
    created_at: string | null;
    customer_id: number | null;
    description: string | null;
    draft_order_id: number | null;
    id: number | null;
    order_id: number | null;
    owner_id: number | null;
    owner_resource: string | null;
    page_id: number | null;
    product_id: number | null;
    product_image_id: number | null;
    type: string | null;
    updated_at: string | null;
    variant_id: number | null;
}
export {};
//# sourceMappingURL=metafield.d.ts.map