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
    country_id?: number | string | null;
    fields?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    country_id?: number | string | null;
    since_id?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    country_id?: number | string | null;
}
export declare class Province extends Base {
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
    static find({ session, id, country_id, fields }: FindArgs): Promise<Province | null>;
    static all({ session, country_id, since_id, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<Province>>;
    static count({ session, country_id, ...otherArgs }: CountArgs): Promise<unknown>;
    code: string | null;
    country_id: number | null;
    id: number | null;
    name: string | null;
    shipping_zone_id: number | null;
    tax: number | null;
    tax_name: string | null;
    tax_percentage: number | null;
    tax_type: string | null;
}
export {};
//# sourceMappingURL=province.d.ts.map