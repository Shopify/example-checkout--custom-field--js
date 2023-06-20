export interface WebhookTriggerFlags {
    topic?: string;
    apiVersion?: string;
    deliveryMethod?: string;
    address?: string;
    clientSecret?: string;
}
export declare const DELIVERY_METHOD: {
    LOCALHOST: string;
    HTTP: string;
    PUBSUB: string;
    EVENTBRIDGE: string;
};
/**
 * Checks whether an address and a delivery method are compatible
 *
 * @param address - A target endpoint
 * @param deliveryMethod - An existing delivery-method
 * @returns true if compatible (eg: pubsub://projectid/topicid and google-pub-sub), false otherwise
 */
export declare function isAddressAllowedForDeliveryMethod(address: string, deliveryMethod: string): boolean;
/**
 * Returns valid address - method pairs from flags
 *
 * @param flags - Command flags
 * @returns [deliveryMethod, address]
 */
export declare function parseAddressAndMethod(flags: WebhookTriggerFlags): [string | undefined, string | undefined];
/**
 * Returns valid api-version - topic pairs
 *
 * @param token - Partners session token
 * @param flags - Command flags
 * @returns [apiVersion, topic]
 */
export declare function parseVersionAndTopic(token: string, flags: WebhookTriggerFlags): Promise<[string | undefined, string | undefined]>;
/**
 * check if the address is allowed for the delivery method
 *
 * @param address - Address
 * @param deliveryMethod - Delivery Method
 * @returns true or Exception
 */
export declare function validateAddressMethod(address: string, deliveryMethod: string): boolean;
/**
 * Check if the address is valid and return a valid address - method pair
 *
 * @param address - Address
 * @returns [address, deliveryMethod]
 */
export declare function parseAddressFlag(address: string): [string, string];
/**
 * Infer the delivery method from address
 *
 * @param address - Address
 * @returns deliveryMethod or undefined
 */
export declare function deliveryMethodForAddress(address: string): string | undefined;
/**
 * topic if available in the topics list (transformed to undercase-slash if passed as GraphQL event name)
 *
 * @param passedTopic - Topic
 * @param apiVersion - ApiVersion for Exception message purposes
 * @param availableTopics - List of available topics
 * @returns topic
 */
export declare function parseTopicFlag(passedTopic: string, apiVersion: string, availableTopics: string[]): string;
