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
    ids?: unknown;
    limit?: unknown;
    since_id?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    fields?: unknown;
}
export declare class Report extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Report | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, ids, limit, since_id, updated_at_min, updated_at_max, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<Report>>;
    category: string | null;
    id: number | null;
    name: string | null;
    shopify_ql: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=report.d.ts.map