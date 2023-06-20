/**
 * Sends a POST request to a local endpoint with a webhook payload
 *
 * @param address - local address where to send the POST message to
 * @param body - Webhook payload
 * @param headers - Webhook headers
 * @returns true if the message was delivered
 */
export declare function triggerLocalWebhook(address: string, body: string, headers: string): Promise<boolean>;
