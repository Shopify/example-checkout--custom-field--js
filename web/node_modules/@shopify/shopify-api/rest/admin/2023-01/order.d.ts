/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Customer } from './customer';
import { DiscountCode } from './discount_code';
import { Fulfillment } from './fulfillment';
import { Refund } from './refund';
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
    ids?: unknown;
    limit?: unknown;
    since_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    processed_at_min?: unknown;
    processed_at_max?: unknown;
    attribution_app_id?: unknown;
    status?: unknown;
    financial_status?: unknown;
    fulfillment_status?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    status?: unknown;
    financial_status?: unknown;
    fulfillment_status?: unknown;
}
interface CancelArgs {
    [key: string]: unknown;
    amount?: unknown;
    currency?: unknown;
    restock?: unknown;
    reason?: unknown;
    email?: unknown;
    refund?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface CloseArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface OpenArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class Order extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Order | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, ids, limit, since_id, created_at_min, created_at_max, updated_at_min, updated_at_max, processed_at_min, processed_at_max, attribution_app_id, status, financial_status, fulfillment_status, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<Order>>;
    static count({ session, created_at_min, created_at_max, updated_at_min, updated_at_max, status, financial_status, fulfillment_status, ...otherArgs }: CountArgs): Promise<unknown>;
    cancel({ amount, currency, restock, reason, email, refund, body, ...otherArgs }: CancelArgs): Promise<unknown>;
    close({ body, ...otherArgs }: CloseArgs): Promise<unknown>;
    open({ body, ...otherArgs }: OpenArgs): Promise<unknown>;
    line_items: {
        [key: string]: unknown;
    }[] | null;
    app_id: number | null;
    billing_address: {
        [key: string]: unknown;
    } | null;
    browser_ip: string | null;
    buyer_accepts_marketing: boolean | null;
    cancel_reason: string | null;
    cancelled_at: string | null;
    cart_token: string | null;
    checkout_token: string | null;
    client_details: {
        [key: string]: unknown;
    } | null;
    closed_at: string | null;
    company: {
        [key: string]: unknown;
    } | null;
    created_at: string | null;
    currency: string | null;
    current_subtotal_price: string | null;
    current_subtotal_price_set: {
        [key: string]: unknown;
    } | null;
    current_total_discounts: string | null;
    current_total_discounts_set: {
        [key: string]: unknown;
    } | null;
    current_total_duties_set: {
        [key: string]: unknown;
    } | null;
    current_total_price: string | null;
    current_total_price_set: {
        [key: string]: unknown;
    } | null;
    current_total_tax: string | null;
    current_total_tax_set: {
        [key: string]: unknown;
    } | null;
    customer: Customer | null | {
        [key: string]: any;
    };
    customer_locale: string | null;
    discount_applications: {
        [key: string]: unknown;
    }[] | null;
    discount_codes: DiscountCode[] | null | {
        [key: string]: any;
    };
    email: string | null;
    estimated_taxes: boolean | null;
    financial_status: string | null;
    fulfillment_status: string | null;
    fulfillments: Fulfillment[] | null | {
        [key: string]: any;
    };
    gateway: string | null;
    id: number | null;
    landing_site: string | null;
    location_id: number | null;
    merchant_of_record_app_id: number | null;
    name: string | null;
    note: string | null;
    note_attributes: {
        [key: string]: unknown;
    }[] | null;
    number: number | null;
    order_number: number | null;
    order_status_url: string | null;
    original_total_duties_set: {
        [key: string]: unknown;
    } | null;
    payment_details: {
        [key: string]: unknown;
    } | null;
    payment_gateway_names: string[] | null;
    payment_terms: {
        [key: string]: unknown;
    } | null;
    phone: string | null;
    presentment_currency: string | null;
    processed_at: string | null;
    processing_method: string | null;
    referring_site: string | null;
    refunds: Refund[] | null | {
        [key: string]: any;
    };
    shipping_address: {
        [key: string]: unknown;
    } | null;
    shipping_lines: {
        [key: string]: unknown;
    }[] | null;
    source_identifier: string | null;
    source_name: string | null;
    source_url: string | null;
    subtotal_price: number | null;
    subtotal_price_set: {
        [key: string]: unknown;
    } | null;
    tags: string | null;
    tax_lines: {
        [key: string]: unknown;
    }[] | null;
    taxes_included: boolean | null;
    test: boolean | null;
    token: string | null;
    total_discounts: string | null;
    total_discounts_set: {
        [key: string]: unknown;
    } | null;
    total_line_items_price: string | null;
    total_line_items_price_set: {
        [key: string]: unknown;
    } | null;
    total_outstanding: string | null;
    total_price: string | null;
    total_price_set: {
        [key: string]: unknown;
    } | null;
    total_shipping_price_set: {
        [key: string]: unknown;
    } | null;
    total_tax: string | number | null;
    total_tax_set: {
        [key: string]: unknown;
    } | null;
    total_tip_received: string | null;
    total_weight: number | null;
    updated_at: string | null;
    user_id: number | null;
}
export {};
//# sourceMappingURL=order.d.ts.map