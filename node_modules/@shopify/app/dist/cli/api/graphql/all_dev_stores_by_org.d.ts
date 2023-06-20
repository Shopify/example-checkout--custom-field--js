export declare const AllDevStoresByOrganizationQuery: string;
export interface AllDevStoresByOrganizationSchema {
    organizations: {
        nodes: {
            id: string;
            stores: {
                nodes: {
                    shopId: string;
                    link: string;
                    shopDomain: string;
                    shopName: string;
                    transferDisabled: boolean;
                    convertableToPartnerTest: boolean;
                }[];
            };
        }[];
    };
}
