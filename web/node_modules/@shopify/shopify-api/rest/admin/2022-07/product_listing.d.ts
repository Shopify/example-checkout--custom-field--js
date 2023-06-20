/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Image } from './image';
import { Variant } from './variant';
interface FindArgs {
    session: Session;
    product_id: number | string;
}
interface DeleteArgs {
    session: Session;
    product_id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    product_ids?: unknown;
    limit?: unknown;
    collection_id?: unknown;
    updated_at_min?: unknown;
    handle?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
}
interface ProductIdsArgs {
    [key: string]: unknown;
    session: Session;
    limit?: unknown;
}
export declare class ProductListing extends Base {
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
    protected static primaryKey: string;
    static find({ session, product_id }: FindArgs): Promise<ProductListing | null>;
    static delete({ session, product_id }: DeleteArgs): Promise<unknown>;
    static all({ session, product_ids, limit, collection_id, updated_at_min, handle, ...otherArgs }: AllArgs): Promise<FindAllResponse<ProductListing>>;
    static count({ session, ...otherArgs }: CountArgs): Promise<unknown>;
    static product_ids({ session, limit, ...otherArgs }: ProductIdsArgs): Promise<unknown>;
    body_html: string | null;
    created_at: string | null;
    handle: string | null;
    images: Image[] | null | {
        [key: string]: any;
    };
    options: {
        [key: string]: unknown;
    }[] | null;
    product_id: number | null;
    product_type: string | null;
    published_at: string | null;
    tags: string | null;
    title: string | null;
    updated_at: string | null;
    variants: Variant[] | null | {
        [key: string]: any;
    };
    vendor: string | null;
}
export {};
//# sourceMappingURL=product_listing.d.ts.map