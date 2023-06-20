/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Metafield } from './metafield';
interface FindArgs {
    session: Session;
    id: number | string;
    blog_id?: number | string | null;
    fields?: unknown;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
    blog_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    blog_id?: number | string | null;
    limit?: unknown;
    since_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    published_status?: unknown;
    handle?: unknown;
    tag?: unknown;
    author?: unknown;
    fields?: unknown;
}
interface AuthorsArgs {
    [key: string]: unknown;
    session: Session;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    blog_id?: number | string | null;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    published_status?: unknown;
}
interface TagsArgs {
    [key: string]: unknown;
    session: Session;
    blog_id?: number | string | null;
    limit?: unknown;
    popular?: unknown;
}
export declare class Article extends Base {
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
    static find({ session, id, blog_id, fields }: FindArgs): Promise<Article | null>;
    static delete({ session, id, blog_id }: DeleteArgs): Promise<unknown>;
    static all({ session, blog_id, limit, since_id, created_at_min, created_at_max, updated_at_min, updated_at_max, published_at_min, published_at_max, published_status, handle, tag, author, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<Article>>;
    static authors({ session, ...otherArgs }: AuthorsArgs): Promise<unknown>;
    static count({ session, blog_id, created_at_min, created_at_max, updated_at_min, updated_at_max, published_at_min, published_at_max, published_status, ...otherArgs }: CountArgs): Promise<unknown>;
    static tags({ session, blog_id, limit, popular, ...otherArgs }: TagsArgs): Promise<unknown>;
    author: string | null;
    blog_id: number | null;
    body_html: string | null;
    created_at: string | null;
    handle: string | null;
    id: number | null;
    image: string | {
        [key: string]: unknown;
    } | null;
    metafields: Metafield[] | null | {
        [key: string]: any;
    };
    published: boolean | null;
    published_at: string | null;
    summary_html: string | null;
    tags: string | null;
    template_suffix: string | null;
    title: string | null;
    updated_at: string | null;
    user_id: number | null;
}
export {};
//# sourceMappingURL=article.d.ts.map