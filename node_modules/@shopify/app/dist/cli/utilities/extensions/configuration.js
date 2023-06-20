export function getUIExtensionResourceURL(uiExtensionType, options) {
    switch (uiExtensionType) {
        case 'checkout_ui_extension':
            return { url: options.checkoutCartUrl };
        case 'product_subscription':
            return { url: options.subscriptionProductUrl ?? '' };
        default:
            return { url: '' };
    }
}
//# sourceMappingURL=configuration.js.map