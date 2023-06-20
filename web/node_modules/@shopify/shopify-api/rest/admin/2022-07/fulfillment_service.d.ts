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
interface DeleteArgs {
    session: Session;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    scope?: unknown;
}
export declare class FulfillmentService extends Base {
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
    static find({ session, id }: FindArgs): Promise<FulfillmentService | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, scope, ...otherArgs }: AllArgs): Promise<FindAllResponse<FulfillmentService>>;
    admin_graphql_api_id: string | null;
    callback_url: string | null;
    fulfillment_orders_opt_in: boolean | null;
    handle: string | null;
    id: number | null;
    inventory_management: boolean | null;
    location_id: number | null;
    name: string | null;
    permits_sku_sharing: boolean | null;
    provider_id: string | null;
    requires_shipping_method: boolean | null;
    tracking_support: boolean | null;
}
export {};
//# sourceMappingURL=fulfillment_service.d.ts.map