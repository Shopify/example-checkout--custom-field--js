export declare const CreateAppQuery: string;
export interface CreateAppQueryVariables {
    org: number;
    title: string;
    appUrl: string;
    redir: string[];
    type: string;
}
export interface CreateAppQuerySchema {
    appCreate: {
        app: {
            id: string;
            apiKey: string;
            title: string;
            applicationUrl: string;
            redirectUrlWhitelist: string[];
            organizationId: string;
            apiSecretKeys: {
                secret: string;
            }[];
            appType: string;
            grantedScopes: string[];
        };
        userErrors: {
            field: string[];
            message: string;
        }[];
    };
}
