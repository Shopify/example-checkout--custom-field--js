/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Fulfillment } from './fulfillment';
interface FindArgs {
    session: Session;
    dispute_id: number | string;
}
export declare class DisputeEvidence extends Base {
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
    protected static primaryKey: string;
    static find({ session, dispute_id }: FindArgs): Promise<DisputeEvidence | null>;
    access_activity_log: string | null;
    billing_address: {
        [key: string]: unknown;
    } | null;
    cancellation_policy_disclosure: string | null;
    cancellation_rebuttal: string | null;
    created_at: string | null;
    customer_email_address: string | null;
    customer_first_name: string | null;
    customer_last_name: string | null;
    dispute_evidence_files: {
        [key: string]: unknown;
    } | null;
    fulfillments: Fulfillment[] | null | {
        [key: string]: any;
    };
    id: number | null;
    payments_dispute_id: number | null;
    product_description: {
        [key: string]: unknown;
    } | null;
    refund_policy_disclosure: string | null;
    refund_refusal_explanation: string | null;
    shipping_address: {
        [key: string]: unknown;
    } | null;
    submitted: boolean | null;
    uncategorized_text: string | null;
    updated_on: string | null;
}
export {};
//# sourceMappingURL=dispute_evidence.d.ts.map