export declare enum LogSeverity {
    Error = 0,
    Warning = 1,
    Info = 2,
    Debug = 3
}
export declare enum ApiVersion {
    July22 = "2022-07",
    October22 = "2022-10",
    January23 = "2023-01",
    April23 = "2023-04",
    Unstable = "unstable"
}
export declare const LIBRARY_NAME = "Shopify API Library";
export declare const LATEST_API_VERSION = ApiVersion.April23;
export declare enum ShopifyHeader {
    AccessToken = "X-Shopify-Access-Token",
    ApiVersion = "X-Shopify-API-Version",
    Domain = "X-Shopify-Shop-Domain",
    Hmac = "X-Shopify-Hmac-Sha256",
    Topic = "X-Shopify-Topic",
    WebhookId = "X-Shopify-Webhook-Id",
    StorefrontAccessToken = "X-Shopify-Storefront-Access-Token",
    StorefrontSDKVariant = "X-SDK-Variant",
    StorefrontSDKVersion = "X-SDK-Version"
}
export declare enum ClientType {
    Rest = "rest",
    Graphql = "graphql"
}
export declare const gdprTopics: string[];
export declare enum BillingInterval {
    OneTime = "ONE_TIME",
    Every30Days = "EVERY_30_DAYS",
    Annual = "ANNUAL",
    Usage = "USAGE"
}
export declare type RecurringBillingIntervals = Exclude<BillingInterval, BillingInterval.OneTime>;
export declare enum BillingReplacementBehavior {
    ApplyImmediately = "APPLY_IMMEDIATELY",
    ApplyOnNextBillingCycle = "APPLY_ON_NEXT_BILLING_CYCLE",
    Standard = "STANDARD"
}
//# sourceMappingURL=types.d.ts.map