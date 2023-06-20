import { fetch } from '@shopify/cli-kit/node/http';
/**
 * Sends a POST request to a local endpoint with a webhook payload
 *
 * @param address - local address where to send the POST message to
 * @param body - Webhook payload
 * @param headers - Webhook headers
 * @returns true if the message was delivered
 */
export async function triggerLocalWebhook(address, body, headers) {
    const options = {
        method: 'POST',
        body,
        headers: {
            'Content-Type': 'application/json',
            ...JSON.parse(headers),
        },
    };
    const response = await fetch(address, options);
    return response.status >= 200 && response.status < 300;
}
//# sourceMappingURL=trigger-local-webhook.js.map