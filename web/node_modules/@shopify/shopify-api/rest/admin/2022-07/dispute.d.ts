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
    since_id?: unknown;
    last_id?: unknown;
    status?: unknown;
    initiated_at?: unknown;
}
export declare class Dispute extends Base {
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
    static find({ session, id }: FindArgs): Promise<Dispute | null>;
    static all({ session, since_id, last_id, status, initiated_at, ...otherArgs }: AllArgs): Promise<FindAllResponse<Dispute>>;
    amount: string | null;
    currency: string | null;
    evidence_due_by: string | null;
    evidence_sent_on: string | null;
    finalized_on: string | null;
    id: number | null;
    network_reason_code: number | null;
    order_id: number | null;
    reason: string | null;
    status: string | null;
    type: string | null;
}
export {};
//# sourceMappingURL=dispute.d.ts.map