/**
 * Retrieve the first variant of the first product of the given store
 * @param store - Store FQDN
 * @returns variantID if exists
 */
export declare function fetchProductVariant(store: string): Promise<string | undefined>;
