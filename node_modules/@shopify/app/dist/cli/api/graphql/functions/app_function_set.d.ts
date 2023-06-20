export declare const AppFunctionSetMutation: string;
export interface AppFunctionSetMutationSchema {
    data: {
        functionSet: {
            userErrors: {
                field: string;
                message: string;
                tag: string;
            }[];
            function?: {
                id: string;
            };
        };
    };
}
export interface AppFunctionSetVariables {
    id?: string;
    legacyUuid?: string;
    title: string;
    description?: string;
    apiType: string;
    apiVersion?: string;
    inputQuery?: string;
    inputQueryVariables?: {
        singleJsonMetafield: {
            namespace: string;
            key: string;
        };
    };
    appBridge?: {
        createPath?: string;
        detailsPath?: string;
    };
    enableCreationUi: boolean;
    moduleUploadUrl: string;
}
