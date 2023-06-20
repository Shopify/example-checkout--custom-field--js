import { AppInterface } from '../models/app/app.js';
import { OutputMessage } from '@shopify/cli-kit/node/output';
export type Format = 'json' | 'text';
interface InfoOptions {
    format: Format;
    /** When true the command outputs the env. variables necessary to deploy and run web/ */
    webEnv: boolean;
}
export declare function info(app: AppInterface, { format, webEnv }: InfoOptions): Promise<OutputMessage>;
export declare function infoWeb(app: AppInterface, { format }: Omit<InfoOptions, 'webEnv'>): Promise<OutputMessage>;
export declare function infoApp(app: AppInterface, { format }: Omit<InfoOptions, 'webEnv'>): Promise<OutputMessage>;
export {};
