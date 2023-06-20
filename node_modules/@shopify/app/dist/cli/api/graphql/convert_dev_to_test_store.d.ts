export declare const ConvertDevToTestStoreQuery: string;
export interface ConvertDevToTestStoreVariables {
    input: {
        organizationID: number;
        shopId: string;
    };
}
export interface ConvertDevToTestStoreSchema {
    convertDevToTestStore: {
        convertedToTestStore: boolean;
        userErrors: {
            field: string[];
            message: string;
        }[];
    };
}
