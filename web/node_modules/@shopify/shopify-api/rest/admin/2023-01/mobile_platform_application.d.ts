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
interface DeleteArgs {
    session: Session;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
}
export declare class MobilePlatformApplication extends Base {
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
    static find({ session, id }: FindArgs): Promise<MobilePlatformApplication | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, ...otherArgs }: AllArgs): Promise<FindAllResponse<MobilePlatformApplication>>;
    application_id: string | null;
    enabled_shared_webcredentials: boolean | null;
    enabled_universal_or_app_links: boolean | null;
    id: number | null;
    platform: string | null;
    sha256_cert_fingerprints: string[] | null;
}
export {};
//# sourceMappingURL=mobile_platform_application.d.ts.map