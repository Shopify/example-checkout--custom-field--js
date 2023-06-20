export declare const ExtensionMigrateToUiExtensionQuery: string;
export interface ExtensionMigrateToUiExtensionVariables {
    apiKey: string;
    registrationId: string;
}
export interface ExtensionMigrateToUiExtensionSchema {
    migrateToUiExtension: {
        migratedToUiExtension: boolean;
        userErrors: {
            field: string[];
            message: string;
        }[];
    };
}
