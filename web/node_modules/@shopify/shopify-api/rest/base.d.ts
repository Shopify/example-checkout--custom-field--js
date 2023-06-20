import { Session } from '../lib/session/session';
import { PageInfo, RestRequestReturn } from '../lib/clients/rest/types';
import { RestClient } from '../lib/clients/rest/rest_client';
import { ConfigInterface } from '../lib/base-types';
import { Headers } from '../runtime/http';
import { IdSet, Body, ResourcePath, ParamSet } from './types';
interface BaseFindArgs {
    session: Session;
    params?: ParamSet;
    urlIds: IdSet;
}
interface BaseConstructorArgs {
    session: Session;
    fromData?: Body | null;
}
interface SaveArgs {
    update?: boolean;
}
interface RequestArgs extends BaseFindArgs {
    http_method: string;
    operation: string;
    body?: Body | null;
    entity?: Base | null;
}
interface GetPathArgs {
    http_method: string;
    operation: string;
    urlIds: IdSet;
    entity?: Base | null;
}
interface SetClassPropertiesArgs {
    Client: typeof RestClient;
    config: ConfigInterface;
}
export interface FindAllResponse<T = Base> {
    data: T[];
    headers: Headers;
    pageInfo?: PageInfo;
}
export declare class Base {
    #private;
    [key: string]: any;
    static Client: typeof RestClient;
    static config: ConfigInterface;
    static apiVersion: string;
    protected static resourceName: string;
    protected static pluralName: string;
    protected static primaryKey: string;
    protected static customPrefix: string | null;
    protected static readOnlyAttributes: string[];
    protected static hasOne: {
        [attribute: string]: typeof Base;
    };
    protected static hasMany: {
        [attribute: string]: typeof Base;
    };
    protected static paths: ResourcePath[];
    static setClassProperties({ Client, config }: SetClassPropertiesArgs): void;
    protected static baseFind<T extends Base = Base>({ session, urlIds, params, }: BaseFindArgs): Promise<FindAllResponse<T>>;
    protected static request<T = unknown>({ session, http_method, operation, urlIds, params, body, entity, }: RequestArgs): Promise<RestRequestReturn<T>>;
    protected static getJsonBodyName(): string;
    protected static getPath({ http_method, operation, urlIds, entity, }: GetPathArgs): string;
    protected static createInstancesFromResponse<T extends Base = Base>(session: Session, data: Body): T[];
    protected static createInstance<T extends Base = Base>(session: Session, data: Body, prevInstance?: T): T;
    get session(): Session;
    constructor({ session, fromData }: BaseConstructorArgs);
    save({ update }?: SaveArgs): Promise<void>;
    saveAndUpdate(): Promise<void>;
    delete(): Promise<void>;
    serialize(saving?: boolean): Body;
    toJSON(): Body;
    request<T = unknown>(args: RequestArgs): Promise<RestRequestReturn<T>>;
    protected setData(data: Body): void;
    private resource;
    private serializeSubAttribute;
}
export {};
//# sourceMappingURL=base.d.ts.map