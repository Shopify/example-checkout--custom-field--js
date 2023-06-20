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
    order_id?: number | string | null;
}
interface CancelArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface CloseArgs {
    [key: string]: unknown;
    message?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface HoldArgs {
    [key: string]: unknown;
    fulfillment_hold?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface MoveArgs {
    [key: string]: unknown;
    fulfillment_order?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface OpenArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface ReleaseHoldArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface RescheduleArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface SetFulfillmentOrdersDeadlineArgs {
    [key: string]: unknown;
    fulfillment_order_ids?: unknown;
    fulfillment_deadline?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class FulfillmentOrder extends Base {
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
    static find({ session, id }: FindArgs): Promise<FulfillmentOrder | null>;
    static all({ session, order_id, ...otherArgs }: AllArgs): Promise<FindAllResponse<FulfillmentOrder>>;
    cancel({ body, ...otherArgs }: CancelArgs): Promise<unknown>;
    close({ message, body, ...otherArgs }: CloseArgs): Promise<unknown>;
    hold({ fulfillment_hold, body, ...otherArgs }: HoldArgs): Promise<unknown>;
    move({ fulfillment_order, body, ...otherArgs }: MoveArgs): Promise<unknown>;
    open({ body, ...otherArgs }: OpenArgs): Promise<unknown>;
    release_hold({ body, ...otherArgs }: ReleaseHoldArgs): Promise<unknown>;
    reschedule({ body, ...otherArgs }: RescheduleArgs): Promise<unknown>;
    set_fulfillment_orders_deadline({ fulfillment_order_ids, fulfillment_deadline, body, ...otherArgs }: SetFulfillmentOrdersDeadlineArgs): Promise<unknown>;
    assigned_location: {
        [key: string]: unknown;
    } | null;
    assigned_location_id: number | null;
    created_at: string | null;
    delivery_method: {
        [key: string]: unknown;
    } | null;
    destination: {
        [key: string]: unknown;
    } | null;
    fulfill_at: string | null;
    fulfill_by: string | null;
    fulfillment_holds: {
        [key: string]: unknown;
    }[] | null;
    id: number | null;
    international_duties: {
        [key: string]: unknown;
    } | null;
    line_items: {
        [key: string]: unknown;
    }[] | null;
    merchant_requests: {
        [key: string]: unknown;
    }[] | null;
    order_id: number | null;
    request_status: string | null;
    shop_id: number | null;
    status: string | null;
    supported_actions: string[] | null;
    updated_at: {
        [key: string]: unknown;
    } | null;
}
export {};
//# sourceMappingURL=fulfillment_order.d.ts.map