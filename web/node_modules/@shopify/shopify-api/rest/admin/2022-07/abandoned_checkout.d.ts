/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Currency } from './currency';
import { Customer } from './customer';
import { DiscountCode } from './discount_code';
interface CheckoutsArgs {
    [key: string]: unknown;
    session: Session;
    since_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    status?: unknown;
    limit?: unknown;
}
export declare class AbandonedCheckout extends Base {
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
    static checkouts({ session, since_id, created_at_min, created_at_max, updated_at_min, updated_at_max, status, limit, ...otherArgs }: CheckoutsArgs): Promise<unknown>;
    abandoned_checkout_url: string | null;
    billing_address: {
        [key: string]: unknown;
    } | null;
    buyer_accepts_marketing: boolean | null;
    buyer_accepts_sms_marketing: boolean | null;
    cart_token: string | null;
    closed_at: string | null;
    completed_at: string | null;
    created_at: string | null;
    currency: Currency | null | {
        [key: string]: any;
    };
    customer: Customer | null | {
        [key: string]: any;
    };
    customer_locale: string | null;
    device_id: number | null;
    discount_codes: DiscountCode[] | null | {
        [key: string]: any;
    };
    email: string | null;
    gateway: string | null;
    id: number | null;
    landing_site: string | null;
    line_items: {
        [key: string]: unknown;
    } | null;
    location_id: number | null;
    note: string | null;
    phone: string | null;
    presentment_currency: string | null;
    referring_site: string | null;
    shipping_address: {
        [key: string]: unknown;
    } | null;
    shipping_lines: {
        [key: string]: unknown;
    } | null;
    sms_marketing_phone: string | null;
    source_name: string | null;
    subtotal_price: string | null;
    tax_lines: {
        [key: string]: unknown;
    } | null;
    taxes_included: boolean | null;
    token: string | null;
    total_discounts: string | null;
    total_duties: string | null;
    total_line_items_price: string | null;
    total_price: string | null;
    total_tax: string | null;
    total_weight: number | null;
    updated_at: string | null;
    user_id: number | null;
}
export {};
//# sourceMappingURL=abandoned_checkout.d.ts.map