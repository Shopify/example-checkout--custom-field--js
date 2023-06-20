/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Country } from './country';
import { Province } from './province';
interface FindArgs {
    session: Session;
    id: number | string;
    order_id?: number | string | null;
    fulfillment_id?: number | string | null;
    event_id?: unknown;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
    order_id?: number | string | null;
    fulfillment_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    order_id?: number | string | null;
    fulfillment_id?: number | string | null;
}
export declare class FulfillmentEvent extends Base {
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
    protected static getJsonBodyName(): string;
    static find({ session, id, order_id, fulfillment_id, event_id }: FindArgs): Promise<FulfillmentEvent | null>;
    static delete({ session, id, order_id, fulfillment_id }: DeleteArgs): Promise<unknown>;
    static all({ session, order_id, fulfillment_id, ...otherArgs }: AllArgs): Promise<FindAllResponse<FulfillmentEvent>>;
    address1: string | null;
    city: string | null;
    country: Country | null | {
        [key: string]: any;
    };
    created_at: string | null;
    estimated_delivery_at: string | null;
    fulfillment_id: number | null;
    happened_at: string | null;
    id: number | null;
    latitude: number | null;
    longitude: number | null;
    message: string | null;
    order_id: number | null;
    province: Province | null | {
        [key: string]: any;
    };
    shop_id: number | null;
    status: string | null;
    updated_at: string | null;
    zip: string | null;
}
export {};
//# sourceMappingURL=fulfillment_event.d.ts.map