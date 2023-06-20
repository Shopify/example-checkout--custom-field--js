/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
interface DeleteArgs {
    session: Session;
    theme_id?: number | string | null;
    asset?: {
        [key: string]: unknown;
    } | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    theme_id?: number | string | null;
    fields?: unknown;
    asset?: {
        [key: string]: unknown;
    } | null;
}
export declare class Asset extends Base {
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
    static delete({ session, theme_id, asset }: DeleteArgs): Promise<unknown>;
    static all({ session, theme_id, fields, asset, ...otherArgs }: AllArgs): Promise<FindAllResponse<Asset>>;
    attachment: string | null;
    checksum: string | null;
    content_type: string | null;
    created_at: string | null;
    key: string | null;
    public_url: string | null;
    size: number | null;
    theme_id: number | null;
    updated_at: string | null;
    value: string | null;
}
export {};
//# sourceMappingURL=asset.d.ts.map