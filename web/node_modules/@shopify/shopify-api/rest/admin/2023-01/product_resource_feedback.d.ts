/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    product_id?: number | string | null;
}
export declare class ProductResourceFeedback extends Base {
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
    static all({ session, product_id, ...otherArgs }: AllArgs): Promise<FindAllResponse<ProductResourceFeedback>>;
    created_at: string | null;
    feedback_generated_at: string | null;
    messages: string[] | null;
    product_id: number | null;
    resource_id: number | null;
    resource_type: string | null;
    resource_updated_at: string | null;
    state: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=product_resource_feedback.d.ts.map