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
}
export declare class ResourceFeedback extends Base {
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
    static all({ session, ...otherArgs }: AllArgs): Promise<FindAllResponse<ResourceFeedback>>;
    created_at: string | null;
    feedback_generated_at: string | null;
    messages: string[] | null;
    resource_id: number | null;
    resource_type: string | null;
    state: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=resource_feedback.d.ts.map