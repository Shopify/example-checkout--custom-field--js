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
    product_id?: number | string | null;
    fields?: unknown;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
    product_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    product_id?: number | string | null;
    since_id?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    product_id?: number | string | null;
    since_id?: unknown;
}
export declare class Image extends Base {
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
    static find({ session, id, product_id, fields }: FindArgs): Promise<Image | null>;
    static delete({ session, id, product_id }: DeleteArgs): Promise<unknown>;
    static all({ session, product_id, since_id, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<Image>>;
    static count({ session, product_id, since_id, ...otherArgs }: CountArgs): Promise<unknown>;
    created_at: string | null;
    height: number | null;
    id: number | null;
    position: number | null;
    product_id: number | null;
    src: string | null;
    updated_at: string | null;
    variant_ids: number[] | null;
    width: number | null;
}
export {};
//# sourceMappingURL=image.d.ts.map