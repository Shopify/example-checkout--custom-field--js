/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { DiscountCode } from './discount_code';
import { Order } from './order';
import { GiftCard } from './gift_card';
interface FindArgs {
    session: Session;
    token: number | string;
}
interface ShippingRatesArgs {
    [key: string]: unknown;
    session: Session;
    token: number | string;
}
interface CompleteArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class Checkout extends Base {
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
    protected static primaryKey: string;
    static find({ session, token }: FindArgs): Promise<Checkout | null>;
    static shipping_rates({ session, token, ...otherArgs }: ShippingRatesArgs): Promise<unknown>;
    complete({ body, ...otherArgs }: CompleteArgs): Promise<unknown>;
    billing_address: {
        [key: string]: unknown;
    } | null;
    line_items: {
        [key: string]: unknown;
    }[] | null;
    applied_discount: {
        [key: string]: unknown;
    } | null;
    buyer_accepts_marketing: boolean | null;
    created_at: string | null;
    currency: string | null;
    customer_id: number | null;
    discount_code: DiscountCode | null | {
        [key: string]: any;
    };
    email: string | null;
    gift_cards: GiftCard[] | null | {
        [key: string]: any;
    };
    order: Order | null | {
        [key: string]: any;
    };
    payment_due: string | null;
    payment_url: string | null;
    phone: string | null;
    presentment_currency: string | null;
    requires_shipping: boolean | null;
    reservation_time: string | null;
    reservation_time_left: number | null;
    shipping_address: {
        [key: string]: unknown;
    } | null;
    shipping_line: {
        [key: string]: unknown;
    } | null;
    shipping_rate: {
        [key: string]: unknown;
    } | null;
    source_identifier: string | null;
    source_name: string | null;
    source_url: string | null;
    subtotal_price: string | null;
    tax_lines: {
        [key: string]: unknown;
    }[] | null;
    taxes_included: boolean | null;
    token: string | null;
    total_price: string | null;
    total_tax: string | null;
    updated_at: string | null;
    user_id: number | null;
    web_url: string | null;
}
export {};
//# sourceMappingURL=checkout.d.ts.map