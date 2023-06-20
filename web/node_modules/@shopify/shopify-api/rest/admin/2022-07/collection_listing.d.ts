/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Image } from './image';
interface FindArgs {
    session: Session;
    collection_id: number | string;
}
interface DeleteArgs {
    session: Session;
    collection_id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    limit?: unknown;
}
interface ProductIdsArgs {
    [key: string]: unknown;
    session: Session;
    collection_id: number | string;
    limit?: unknown;
}
export declare class CollectionListing extends Base {
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
    static find({ session, collection_id }: FindArgs): Promise<CollectionListing | null>;
    static delete({ session, collection_id }: DeleteArgs): Promise<unknown>;
    static all({ session, limit, ...otherArgs }: AllArgs): Promise<FindAllResponse<CollectionListing>>;
    static product_ids({ session, collection_id, limit, ...otherArgs }: ProductIdsArgs): Promise<unknown>;
    body_html: string | null;
    collection_id: number | null;
    default_product_image: {
        [key: string]: unknown;
    }[] | null;
    handle: string | null;
    image: Image | null | {
        [key: string]: any;
    };
    published_at: string | null;
    sort_order: string | null;
    title: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=collection_listing.d.ts.map