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
    fulfillment_order_id?: number | string | null;
}
export declare class LocationsForMove extends Base {
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
    static all({ session, fulfillment_order_id, ...otherArgs }: AllArgs): Promise<FindAllResponse<LocationsForMove>>;
    locations_for_move: {
        [key: string]: unknown;
    }[] | null;
}
export {};
//# sourceMappingURL=locations_for_move.d.ts.map