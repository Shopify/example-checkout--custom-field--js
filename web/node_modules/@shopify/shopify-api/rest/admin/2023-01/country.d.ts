/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Province } from './province';
interface FindArgs {
    session: Session;
    id: number | string;
    fields?: unknown;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    since_id?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
}
export declare class Country extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Country | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, since_id, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<Country>>;
    static count({ session, ...otherArgs }: CountArgs): Promise<unknown>;
    code: string | null;
    id: number | null;
    name: string | null;
    provinces: Province[] | null | {
        [key: string]: any;
    };
    tax: number | null;
}
export {};
//# sourceMappingURL=country.d.ts.map