import { WebhookTriggerFlags } from './trigger-flags.js';
/**
 * Orchestrates the command request by collecting params, requesting the sample, and sending it to localhost if
 * required.
 * It outputs the result
 *
 * @param flags - Passed flags
 */
export declare function webhookTriggerService(flags: WebhookTriggerFlags): Promise<void>;
export declare function isValueSet(value: string | undefined): boolean;
