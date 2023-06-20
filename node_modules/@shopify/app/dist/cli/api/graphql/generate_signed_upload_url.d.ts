export declare const GenerateSignedUploadUrl: string;
export interface GenerateSignedUploadUrlVariables {
    apiKey: string;
    deploymentUuid: string;
    bundleFormat: number;
}
export interface GenerateSignedUploadUrlSchema {
    deploymentGenerateSignedUploadUrl: {
        signedUploadUrl: string;
        userErrors: {
            field: string[];
            message: string;
        }[];
    };
}
