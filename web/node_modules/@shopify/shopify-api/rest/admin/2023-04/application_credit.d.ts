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
    fields?: unknown;
}
export declare class ApplicationCredit extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<ApplicationCredit | null>;
    static all({ session, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<ApplicationCredit>>;
    amount: number | null;
    currency: Currency | null | {
        [key: string]: any;
    };
    description: string | null;
    id: number | null;
    test: boolean | null;
}
export {};
//# sourceMappingURL=application_credit.d.ts.map