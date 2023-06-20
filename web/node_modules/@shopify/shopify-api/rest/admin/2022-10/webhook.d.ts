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
    address?: unknown;
    created_at_max?: unknown;
    created_at_min?: unknown;
    fields?: unknown;
    limit?: unknown;
    since_id?: unknown;
    topic?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    address?: unknown;
    topic?: unknown;
}
export declare class Webhook extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Webhook | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, address, created_at_max, created_at_min, fields, limit, since_id, topic, updated_at_min, updated_at_max, ...otherArgs }: AllArgs): Promise<FindAllResponse<Webhook>>;
    static count({ session, address, topic, ...otherArgs }: CountArgs): Promise<unknown>;
    address: string | null;
    topic: string | null;
    api_version: string | null;
    created_at: string | null;
    fields: string[] | null;
    format: string | null;
    id: number | null;
    metafield_namespaces: string[] | null;
    private_metafield_namespaces: string[] | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=webhook.d.ts.map