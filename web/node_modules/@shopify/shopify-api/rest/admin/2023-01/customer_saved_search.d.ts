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
    fields?: unknown;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    limit?: unknown;
    since_id?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    since_id?: unknown;
}
interface CustomersArgs {
    [key: string]: unknown;
    session: Session;
    id: number | string;
    order?: unknown;
    limit?: unknown;
    fields?: unknown;
}
export declare class CustomerSavedSearch extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<CustomerSavedSearch | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, limit, since_id, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<CustomerSavedSearch>>;
    static count({ session, since_id, ...otherArgs }: CountArgs): Promise<unknown>;
    static customers({ session, id, order, limit, fields, ...otherArgs }: CustomersArgs): Promise<unknown>;
    created_at: string | null;
    id: number | null;
    name: string | null;
    query: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=customer_saved_search.d.ts.map