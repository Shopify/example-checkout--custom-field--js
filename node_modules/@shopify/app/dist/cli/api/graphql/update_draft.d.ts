export declare const ExtensionUpdateDraftMutation: string;
export interface ExtensionUpdateDraftInput {
    apiKey: string;
    config: string;
    context: string | undefined;
    registrationId: string;
}
export interface ExtensionUpdateDraftPayload {
    clientMutationId: string;
    extensionVersion: ExtensionVersion;
    userErrors: {
        field: string[];
        message: string;
    }[];
}
export interface ExtensionVersion {
    config: string;
    context: string;
    id: string;
    lastUserInteractionAt: string;
    location: string;
    registrationId: string;
    registrationUuid: string;
    uuid: string;
    validationErrors: {
        field: string[];
        message: string;
    }[];
    versionTag: string;
}
export interface ExtensionUpdateSchema {
    extensionUpdateDraft: ExtensionUpdateDraftPayload;
}
