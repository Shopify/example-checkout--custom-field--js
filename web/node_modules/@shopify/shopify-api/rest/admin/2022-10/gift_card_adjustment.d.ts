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
    gift_card_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    gift_card_id?: number | string | null;
}
export declare class GiftCardAdjustment extends Base {
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
    static find({ session, id, gift_card_id }: FindArgs): Promise<GiftCardAdjustment | null>;
    static all({ session, gift_card_id, ...otherArgs }: AllArgs): Promise<FindAllResponse<GiftCardAdjustment>>;
    amount: number | null;
    api_client_id: number | null;
    created_at: string | null;
    gift_card_id: number | null;
    id: number | null;
    note: string | null;
    number: number | null;
    order_transaction_id: number | null;
    processed_at: string | null;
    remote_transaction_ref: string | null;
    remote_transaction_url: string | null;
    user_id: number | null;
}
export {};
//# sourceMappingURL=gift_card_adjustment.d.ts.map