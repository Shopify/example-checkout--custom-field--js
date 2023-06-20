/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    assignment_status?: unknown;
    location_ids?: unknown[] | number | string | null;
}
export declare class AssignedFulfillmentOrder extends Base {
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
    static all({ session, assignment_status, location_ids, ...otherArgs }: AllArgs): Promise<FindAllResponse<AssignedFulfillmentOrder>>;
    assigned_location_id: number | null;
    destination: {
        [key: string]: unknown;
    } | null;
    id: number | null;
    line_items: {
        [key: string]: unknown;
    }[] | null;
    order_id: number | null;
    request_status: string | null;
    shop_id: number | null;
    status: string | null;
}
export {};
//# sourceMappingURL=assigned_fulfillment_order.d.ts.map