import { Interfaces } from '@oclif/core';
interface ReportAnalyticsEventOptions {
    config: Interfaces.Config;
    errorMessage?: string;
}
/**
 * Report an analytics event, sending it off to Monorail -- Shopify's internal analytics service.
 *
 * The payload for an event includes both generic data, and data gathered from installed plug-ins.
 *
 */
export declare function reportAnalyticsEvent(options: ReportAnalyticsEventOptions): Promise<void>;
export {};
