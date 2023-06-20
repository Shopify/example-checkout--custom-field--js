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
    fields?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    since_id?: unknown;
    fields?: unknown;
}
export declare class ApplicationCharge extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<ApplicationCharge | null>;
    static all({ session, since_id, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<ApplicationCharge>>;
    confirmation_url: string | null;
    created_at: string | null;
    currency: Currency | null | {
        [key: string]: any;
    };
    id: number | null;
    name: string | null;
    price: string | number | null;
    return_url: string | null;
    status: string | null;
    test: boolean | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=application_charge.d.ts.map