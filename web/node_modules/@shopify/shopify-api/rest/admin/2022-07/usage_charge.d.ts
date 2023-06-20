/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Currency } from './currency';
interface FindArgs {
    session: Session;
    id: number | string;
    recurring_application_charge_id?: number | string | null;
    fields?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    recurring_application_charge_id?: number | string | null;
    fields?: unknown;
}
export declare class UsageCharge extends Base {
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
    static find({ session, id, recurring_application_charge_id, fields }: FindArgs): Promise<UsageCharge | null>;
    static all({ session, recurring_application_charge_id, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<UsageCharge>>;
    created_at: string | null;
    currency: Currency | null | {
        [key: string]: any;
    };
    description: string | null;
    id: number | null;
    price: number | null;
    recurring_application_charge_id: number | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=usage_charge.d.ts.map