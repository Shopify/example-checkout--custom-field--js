"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.restResources = void 0;
const abandoned_checkout_1 = require("./abandoned_checkout");
const access_scope_1 = require("./access_scope");
const android_pay_key_1 = require("./android_pay_key");
const apple_pay_certificate_1 = require("./apple_pay_certificate");
const application_charge_1 = require("./application_charge");
const application_credit_1 = require("./application_credit");
const article_1 = require("./article");
const asset_1 = require("./asset");
const assigned_fulfillment_order_1 = require("./assigned_fulfillment_order");
const balance_1 = require("./balance");
const blog_1 = require("./blog");
const cancellation_request_1 = require("./cancellation_request");
const carrier_service_1 = require("./carrier_service");
const checkout_1 = require("./checkout");
const collect_1 = require("./collect");
const collection_1 = require("./collection");
const collection_listing_1 = require("./collection_listing");
const comment_1 = require("./comment");
const country_1 = require("./country");
const currency_1 = require("./currency");
const custom_collection_1 = require("./custom_collection");
const customer_1 = require("./customer");
const customer_address_1 = require("./customer_address");
const customer_saved_search_1 = require("./customer_saved_search");
const deprecated_api_call_1 = require("./deprecated_api_call");
const discount_code_1 = require("./discount_code");
const dispute_1 = require("./dispute");
const dispute_evidence_1 = require("./dispute_evidence");
const dispute_file_upload_1 = require("./dispute_file_upload");
const draft_order_1 = require("./draft_order");
const event_1 = require("./event");
const fulfillment_1 = require("./fulfillment");
const fulfillment_event_1 = require("./fulfillment_event");
const fulfillment_order_1 = require("./fulfillment_order");
const fulfillment_request_1 = require("./fulfillment_request");
const fulfillment_service_1 = require("./fulfillment_service");
const gift_card_1 = require("./gift_card");
const gift_card_adjustment_1 = require("./gift_card_adjustment");
const image_1 = require("./image");
const inventory_item_1 = require("./inventory_item");
const inventory_level_1 = require("./inventory_level");
const location_1 = require("./location");
const locations_for_move_1 = require("./locations_for_move");
const marketing_event_1 = require("./marketing_event");
const metafield_1 = require("./metafield");
const mobile_platform_application_1 = require("./mobile_platform_application");
const order_1 = require("./order");
const order_risk_1 = require("./order_risk");
const page_1 = require("./page");
const payment_1 = require("./payment");
const payment_gateway_1 = require("./payment_gateway");
const payment_transaction_1 = require("./payment_transaction");
const payout_1 = require("./payout");
const policy_1 = require("./policy");
const price_rule_1 = require("./price_rule");
const product_1 = require("./product");
const product_listing_1 = require("./product_listing");
const product_resource_feedback_1 = require("./product_resource_feedback");
const province_1 = require("./province");
const recurring_application_charge_1 = require("./recurring_application_charge");
const redirect_1 = require("./redirect");
const refund_1 = require("./refund");
const report_1 = require("./report");
const resource_feedback_1 = require("./resource_feedback");
const script_tag_1 = require("./script_tag");
const shipping_zone_1 = require("./shipping_zone");
const shop_1 = require("./shop");
const smart_collection_1 = require("./smart_collection");
const storefront_access_token_1 = require("./storefront_access_token");
const tender_transaction_1 = require("./tender_transaction");
const theme_1 = require("./theme");
const transaction_1 = require("./transaction");
const usage_charge_1 = require("./usage_charge");
const user_1 = require("./user");
const variant_1 = require("./variant");
const webhook_1 = require("./webhook");
exports.restResources = {
    AbandonedCheckout: abandoned_checkout_1.AbandonedCheckout,
    AccessScope: access_scope_1.AccessScope,
    AndroidPayKey: android_pay_key_1.AndroidPayKey,
    ApplePayCertificate: apple_pay_certificate_1.ApplePayCertificate,
    ApplicationCharge: application_charge_1.ApplicationCharge,
    ApplicationCredit: application_credit_1.ApplicationCredit,
    Article: article_1.Article,
    Asset: asset_1.Asset,
    AssignedFulfillmentOrder: assigned_fulfillment_order_1.AssignedFulfillmentOrder,
    Balance: balance_1.Balance,
    Blog: blog_1.Blog,
    CancellationRequest: cancellation_request_1.CancellationRequest,
    CarrierService: carrier_service_1.CarrierService,
    Checkout: checkout_1.Checkout,
    Collect: collect_1.Collect,
    Collection: collection_1.Collection,
    CollectionListing: collection_listing_1.CollectionListing,
    Comment: comment_1.Comment,
    Country: country_1.Country,
    Currency: currency_1.Currency,
    CustomCollection: custom_collection_1.CustomCollection,
    Customer: customer_1.Customer,
    CustomerAddress: customer_address_1.CustomerAddress,
    CustomerSavedSearch: customer_saved_search_1.CustomerSavedSearch,
    DeprecatedApiCall: deprecated_api_call_1.DeprecatedApiCall,
    DiscountCode: discount_code_1.DiscountCode,
    Dispute: dispute_1.Dispute,
    DisputeEvidence: dispute_evidence_1.DisputeEvidence,
    DisputeFileUpload: dispute_file_upload_1.DisputeFileUpload,
    DraftOrder: draft_order_1.DraftOrder,
    Event: event_1.Event,
    Fulfillment: fulfillment_1.Fulfillment,
    FulfillmentEvent: fulfillment_event_1.FulfillmentEvent,
    FulfillmentOrder: fulfillment_order_1.FulfillmentOrder,
    FulfillmentRequest: fulfillment_request_1.FulfillmentRequest,
    FulfillmentService: fulfillment_service_1.FulfillmentService,
    GiftCard: gift_card_1.GiftCard,
    GiftCardAdjustment: gift_card_adjustment_1.GiftCardAdjustment,
    Image: image_1.Image,
    InventoryItem: inventory_item_1.InventoryItem,
    InventoryLevel: inventory_level_1.InventoryLevel,
    Location: location_1.Location,
    LocationsForMove: locations_for_move_1.LocationsForMove,
    MarketingEvent: marketing_event_1.MarketingEvent,
    Metafield: metafield_1.Metafield,
    MobilePlatformApplication: mobile_platform_application_1.MobilePlatformApplication,
    Order: order_1.Order,
    OrderRisk: order_risk_1.OrderRisk,
    Page: page_1.Page,
    Payment: payment_1.Payment,
    PaymentGateway: payment_gateway_1.PaymentGateway,
    PaymentTransaction: payment_transaction_1.PaymentTransaction,
    Payout: payout_1.Payout,
    Policy: policy_1.Policy,
    PriceRule: price_rule_1.PriceRule,
    Product: product_1.Product,
    ProductListing: product_listing_1.ProductListing,
    ProductResourceFeedback: product_resource_feedback_1.ProductResourceFeedback,
    Province: province_1.Province,
    RecurringApplicationCharge: recurring_application_charge_1.RecurringApplicationCharge,
    Redirect: redirect_1.Redirect,
    Refund: refund_1.Refund,
    Report: report_1.Report,
    ResourceFeedback: resource_feedback_1.ResourceFeedback,
    ScriptTag: script_tag_1.ScriptTag,
    ShippingZone: shipping_zone_1.ShippingZone,
    Shop: shop_1.Shop,
    SmartCollection: smart_collection_1.SmartCollection,
    StorefrontAccessToken: storefront_access_token_1.StorefrontAccessToken,
    TenderTransaction: tender_transaction_1.TenderTransaction,
    Theme: theme_1.Theme,
    Transaction: transaction_1.Transaction,
    UsageCharge: usage_charge_1.UsageCharge,
    User: user_1.User,
    Variant: variant_1.Variant,
    Webhook: webhook_1.Webhook,
};
//# sourceMappingURL=index.js.map