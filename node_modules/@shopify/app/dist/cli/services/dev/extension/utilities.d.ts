import { UIExtension } from '../../../models/app/extensions.js';
/**
 * To prepare UI Extensions targeting Checkout for dev'ing we need to retrieve a valid product variant ID
 * @param extensions - The UI Extensions to dev
 * @param store - The store FQDN
 */
export declare function getCartPathFromExtensions(extensions: UIExtension[], store: string, checkoutCartUrl?: string): Promise<string | undefined>;
/**
 * Returns the surface for UI extension from an extension point target
 */
export declare function getExtensionPointTargetSurface(extensionPointTarget: string): string;
