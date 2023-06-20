import { AdapterResponse } from '../../runtime/http';
import { ConfigInterface } from '../base-types';
import { WebhookRegistry, WebhookProcessParams } from './types';
export declare function process(config: ConfigInterface, webhookRegistry: WebhookRegistry): ({ rawBody, ...adapterArgs }: WebhookProcessParams) => Promise<AdapterResponse>;
//# sourceMappingURL=process.d.ts.map