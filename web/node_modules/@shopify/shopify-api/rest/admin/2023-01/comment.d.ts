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
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    limit?: unknown;
    since_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    fields?: unknown;
    published_status?: unknown;
    status?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    published_status?: unknown;
    status?: unknown;
}
interface ApproveArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface NotSpamArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface RemoveArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface RestoreArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface SpamArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class Comment extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Comment | null>;
    static all({ session, limit, since_id, created_at_min, created_at_max, updated_at_min, updated_at_max, published_at_min, published_at_max, fields, published_status, status, ...otherArgs }: AllArgs): Promise<FindAllResponse<Comment>>;
    static count({ session, created_at_min, created_at_max, updated_at_min, updated_at_max, published_at_min, published_at_max, published_status, status, ...otherArgs }: CountArgs): Promise<unknown>;
    approve({ body, ...otherArgs }: ApproveArgs): Promise<unknown>;
    not_spam({ body, ...otherArgs }: NotSpamArgs): Promise<unknown>;
    remove({ body, ...otherArgs }: RemoveArgs): Promise<unknown>;
    restore({ body, ...otherArgs }: RestoreArgs): Promise<unknown>;
    spam({ body, ...otherArgs }: SpamArgs): Promise<unknown>;
    article_id: number | null;
    author: string | null;
    blog_id: number | null;
    body: string | null;
    body_html: string | null;
    created_at: string | null;
    email: string | null;
    id: number | null;
    ip: string | null;
    published_at: string | null;
    status: string | null;
    updated_at: string | null;
    user_agent: string | null;
}
export {};
//# sourceMappingURL=comment.d.ts.map