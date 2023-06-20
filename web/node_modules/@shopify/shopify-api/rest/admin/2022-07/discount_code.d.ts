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
    price_rule_id?: number | string | null;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
    price_rule_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    price_rule_id?: number | string | null;
    batch_id?: number | string | null;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    times_used?: unknown;
    times_used_min?: unknown;
    times_used_max?: unknown;
}
interface GetAllArgs {
    [key: string]: unknown;
    session: Session;
    price_rule_id?: number | string | null;
    batch_id?: number | string | null;
}
interface LookupArgs {
    [key: string]: unknown;
    session: Session;
    code?: unknown;
}
interface BatchArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class DiscountCode extends Base {
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
    static find({ session, id, price_rule_id }: FindArgs): Promise<DiscountCode | null>;
    static delete({ session, id, price_rule_id }: DeleteArgs): Promise<unknown>;
    static all({ session, price_rule_id, batch_id, ...otherArgs }: AllArgs): Promise<FindAllResponse<DiscountCode>>;
    static count({ session, times_used, times_used_min, times_used_max, ...otherArgs }: CountArgs): Promise<unknown>;
    static get_all({ session, price_rule_id, batch_id, ...otherArgs }: GetAllArgs): Promise<unknown>;
    static lookup({ session, code, ...otherArgs }: LookupArgs): Promise<unknown>;
    batch({ body, ...otherArgs }: BatchArgs): Promise<unknown>;
    code: string | null;
    created_at: string | null;
    id: number | null;
    price_rule_id: number | null;
    updated_at: string | null;
    usage_count: number | null;
}
export {};
//# sourceMappingURL=discount_code.d.ts.map