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
    order_id?: number | string | null;
    fields?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    fulfillment_order_id?: number | string | null;
    order_id?: number | string | null;
    created_at_max?: unknown;
    created_at_min?: unknown;
    fields?: unknown;
    limit?: unknown;
    since_id?: unknown;
    updated_at_max?: unknown;
    updated_at_min?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    order_id?: number | string | null;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
}
interface CancelArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface UpdateTrackingArgs {
    [key: string]: unknown;
    notify_customer?: unknown;
    tracking_info?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class Fulfillment extends Base {
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
    static find({ session, id, order_id, fields }: FindArgs): Promise<Fulfillment | null>;
    static all({ session, fulfillment_order_id, order_id, created_at_max, created_at_min, fields, limit, since_id, updated_at_max, updated_at_min, ...otherArgs }: AllArgs): Promise<FindAllResponse<Fulfillment>>;
    static count({ session, order_id, created_at_min, created_at_max, updated_at_min, updated_at_max, ...otherArgs }: CountArgs): Promise<unknown>;
    cancel({ body, ...otherArgs }: CancelArgs): Promise<unknown>;
    update_tracking({ notify_customer, tracking_info, body, ...otherArgs }: UpdateTrackingArgs): Promise<unknown>;
    created_at: string | null;
    id: number | null;
    line_items: {
        [key: string]: unknown;
    }[] | null;
    location_id: number | null;
    name: string | null;
    notify_customer: boolean | null;
    order_id: number | null;
    origin_address: {
        [key: string]: unknown;
    }[] | null;
    receipt: {
        [key: string]: unknown;
    } | null;
    service: string | null;
    shipment_status: string | null;
    status: string | null;
    tracking_company: string | null;
    tracking_numbers: string[] | null;
    tracking_urls: string[] | null;
    updated_at: string | null;
    variant_inventory_management: string | null;
}
export {};
//# sourceMappingURL=fulfillment.d.ts.map