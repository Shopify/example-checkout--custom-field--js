export declare const FindProductVariantQuery: string;
export interface FindProductVariantSchema {
    products: {
        edges: {
            node: {
                id: string;
                variants: {
                    edges: {
                        node: {
                            id: string;
                        };
                    }[];
                };
            };
        }[];
    };
}
