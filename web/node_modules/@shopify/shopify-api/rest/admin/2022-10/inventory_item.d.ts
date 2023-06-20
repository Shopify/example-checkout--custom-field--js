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
    ids?: unknown;
    limit?: unknown;
}
export declare class InventoryItem extends Base {
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
    static find({ session, id }: FindArgs): Promise<InventoryItem | null>;
    static all({ session, ids, limit, ...otherArgs }: AllArgs): Promise<FindAllResponse<InventoryItem>>;
    cost: string | null;
    country_code_of_origin: string | null;
    country_harmonized_system_codes: {
        [key: string]: unknown;
    }[] | null;
    created_at: string | null;
    harmonized_system_code: number | null;
    id: number | null;
    province_code_of_origin: string | null;
    requires_shipping: boolean | null;
    sku: string | null;
    tracked: boolean | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=inventory_item.d.ts.map