interface GetUIExensionResourceURLOptions {
    checkoutCartUrl?: string;
    subscriptionProductUrl?: string;
}
export declare function getUIExtensionResourceURL(uiExtensionType: string, options: GetUIExensionResourceURLOptions): {
    url: string | undefined;
};
export {};
