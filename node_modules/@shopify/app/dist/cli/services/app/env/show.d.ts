import { AppInterface } from '../../../models/app/app.js';
import { OutputMessage } from '@shopify/cli-kit/node/output';
type Format = 'json' | 'text';
export declare function showEnv(app: AppInterface): Promise<OutputMessage>;
export declare function outputEnv(app: AppInterface, format: Format): Promise<OutputMessage>;
export {};
