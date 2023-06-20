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
    customer_id?: number | string | null;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
    customer_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    customer_id?: number | string | null;
}
interface DefaultArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface SetArgs {
    [key: string]: unknown;
    address_ids?: unknown[] | number | string | null;
    operation?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class CustomerAddress extends Base {
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
    static find({ session, id, customer_id }: FindArgs): Promise<CustomerAddress | null>;
    static delete({ session, id, customer_id }: DeleteArgs): Promise<unknown>;
    static all({ session, customer_id, ...otherArgs }: AllArgs): Promise<FindAllResponse<CustomerAddress>>;
    default({ body, ...otherArgs }: DefaultArgs): Promise<unknown>;
    set({ address_ids, operation, body, ...otherArgs }: SetArgs): Promise<unknown>;
    address1: string | null;
    address2: string | null;
    city: string | null;
    company: string | null;
    country: string | null;
    country_code: string | null;
    country_name: string | null;
    customer_id: number | null;
    first_name: string | null;
    id: number | null;
    last_name: string | null;
    name: string | null;
    phone: string | null;
    province: string | null;
    province_code: string | null;
    zip: string | null;
}
export {};
//# sourceMappingURL=customer_address.d.ts.map