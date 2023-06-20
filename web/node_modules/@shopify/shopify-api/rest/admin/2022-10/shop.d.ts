/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base, FindAllResponse } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    fields?: unknown;
}
export declare class Shop extends Base {
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
    static all({ session, fields, ...otherArgs }: AllArgs): Promise<FindAllResponse<Shop>>;
    address1: string | null;
    address2: string | null;
    checkout_api_supported: boolean | null;
    city: string | null;
    cookie_consent_level: string | null;
    country: string | null;
    country_code: string | null;
    country_name: string | null;
    county_taxes: string | null;
    created_at: string | null;
    currency: string | null;
    customer_email: string | null;
    domain: string | null;
    eligible_for_card_reader_giveaway: boolean | null;
    eligible_for_payments: boolean | null;
    email: string | null;
    enabled_presentment_currencies: string[] | null;
    finances: boolean | null;
    force_ssl: boolean | null;
    google_apps_domain: string | null;
    google_apps_login_enabled: string | null;
    has_discounts: boolean | null;
    has_gift_cards: boolean | null;
    has_storefront: boolean | null;
    iana_timezone: string | null;
    id: number | null;
    latitude: number | null;
    longitude: number | null;
    marketing_sms_consent_enabled_at_checkout: boolean | null;
    money_format: string | null;
    money_in_emails_format: string | null;
    money_with_currency_format: string | null;
    money_with_currency_in_emails_format: string | null;
    multi_location_enabled: boolean | null;
    myshopify_domain: string | null;
    name: string | null;
    password_enabled: boolean | null;
    phone: string | null;
    plan_display_name: string | null;
    plan_name: string | null;
    pre_launch_enabled: boolean | null;
    primary_locale: string | null;
    primary_location_id: number | null;
    province: string | null;
    province_code: string | null;
    requires_extra_payments_agreement: boolean | null;
    setup_required: boolean | null;
    shop_owner: string | null;
    source: string | null;
    tax_shipping: string | null;
    taxes_included: string | null;
    timezone: string | null;
    transactional_sms_disabled: boolean | null;
    updated_at: string | null;
    weight_unit: string | null;
    zip: string | null;
}
export {};
//# sourceMappingURL=shop.d.ts.map