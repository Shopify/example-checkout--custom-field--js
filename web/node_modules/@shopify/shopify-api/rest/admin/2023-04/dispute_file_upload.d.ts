/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
interface DeleteArgs {
    session: Session;
    id: number | string;
    dispute_id?: number | string | null;
}
export declare class DisputeFileUpload extends Base {
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
    static delete({ session, id, dispute_id }: DeleteArgs): Promise<unknown>;
    dispute_evidence_id: number | null;
    dispute_evidence_type: string | null;
    file_size: number | null;
    file_type: string | null;
    filename: string | null;
    id: number | null;
    original_filename: string | null;
    shop_id: number | null;
    url: string | null;
}
export {};
//# sourceMappingURL=dispute_file_upload.d.ts.map