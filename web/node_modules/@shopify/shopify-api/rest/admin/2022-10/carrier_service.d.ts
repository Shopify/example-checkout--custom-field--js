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
}
export declare class CarrierService extends Base {
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
    static find({ session, id }: FindArgs): Promise<CarrierService | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, ...otherArgs }: AllArgs): Promise<FindAllResponse<CarrierService>>;
    active: boolean | null;
    admin_graphql_api_id: string | null;
    callback_url: string | null;
    carrier_service_type: string | null;
    id: number | null;
    name: string | null;
    service_discovery: boolean | null;
}
export {};
//# sourceMappingURL=carrier_service.d.ts.map