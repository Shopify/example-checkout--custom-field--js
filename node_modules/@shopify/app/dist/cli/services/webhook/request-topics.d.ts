export interface WebhookTopicsSchema {
    webhookTopics: string[];
}
/**
 * Requests topics for an api-version in order to validate flags or present a list of options
 *
 * @param token - Partners session token
 * @param apiVersion - ApiVersion of the topics
 * @returns - Available webhook topics for the api-version
 */
export declare function requestTopics(token: string, apiVersion: string): Promise<string[]>;
