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
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
}
interface InventoryLevelsArgs {
    [key: string]: unknown;
    session: Session;
    id: number | string;
}
export declare class Location extends Base {
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
    static find({ session, id }: FindArgs): Promise<Location | null>;
    static all({ session, ...otherArgs }: AllArgs): Promise<FindAllResponse<Location>>;
    static count({ session, ...otherArgs }: CountArgs): Promise<unknown>;
    static inventory_levels({ session, id, ...otherArgs }: InventoryLevelsArgs): Promise<unknown>;
    active: boolean | null;
    address1: string | null;
    address2: string | null;
    city: string | null;
    country: string | null;
    country_code: string | null;
    created_at: string | null;
    id: number | null;
    legacy: boolean | null;
    localized_country_name: string | null;
    localized_province_name: string | null;
    name: string | null;
    phone: string | null;
    province: string | null;
    province_code: string | null;
    updated_at: string | null;
    zip: string | null;
}
export {};
//# sourceMappingURL=location.d.ts.map