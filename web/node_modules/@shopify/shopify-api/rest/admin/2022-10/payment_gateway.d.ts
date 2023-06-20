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
export declare class PaymentGateway extends Base {
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
    static find({ session, id }: FindArgs): Promise<PaymentGateway | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, ...otherArgs }: AllArgs): Promise<FindAllResponse<PaymentGateway>>;
    attachment: string | null;
    created_at: string | null;
    credential1: string | null;
    credential2: string | null;
    credential3: string | null;
    credential4: string | null;
    disabled: boolean | null;
    enabled_card_brands: string[] | null;
    id: number | null;
    name: string | null;
    processing_method: string | null;
    provider_id: number | null;
    sandbox: boolean | null;
    service_name: string | null;
    supports_network_tokenization: boolean | null;
    type: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=payment_gateway.d.ts.map