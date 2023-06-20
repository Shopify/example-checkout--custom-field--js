/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base } from '../../base';
import { ResourcePath } from '../../types';
import { ApiVersion } from '../../../lib/types';
interface AcceptArgs {
    [key: string]: unknown;
    message?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface RejectArgs {
    [key: string]: unknown;
    message?: unknown;
    reason?: unknown;
    line_items?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class FulfillmentRequest extends Base {
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
    accept({ message, body, ...otherArgs }: AcceptArgs): Promise<unknown>;
    reject({ message, reason, line_items, body, ...otherArgs }: RejectArgs): Promise<unknown>;
    fulfillment_order_id: number | null;
}
export {};
//# sourceMappingURL=fulfillment_request.d.ts.map