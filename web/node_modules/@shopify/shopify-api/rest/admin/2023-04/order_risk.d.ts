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
}
interface DeleteArgs {
    session: Session;
    id: number | string;
    order_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    order_id?: number | string | null;
}
export declare class OrderRisk extends Base {
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
    static find({ session, id, order_id }: FindArgs): Promise<OrderRisk | null>;
    static delete({ session, id, order_id }: DeleteArgs): Promise<unknown>;
    static all({ session, order_id, ...otherArgs }: AllArgs): Promise<FindAllResponse<OrderRisk>>;
    cause_cancel: boolean | null;
    checkout_id: number | null;
    display: boolean | null;
    id: number | null;
    merchant_message: string | null;
    message: string | null;
    order_id: number | null;
    recommendation: string | null;
    score: number | null;
    source: string | null;
}
export {};
//# sourceMappingURL=order_risk.d.ts.map