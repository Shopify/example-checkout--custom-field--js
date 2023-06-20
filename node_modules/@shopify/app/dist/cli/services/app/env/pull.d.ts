import { AppInterface } from '../../../models/app/app.js';
import { OutputMessage } from '@shopify/cli-kit/node/output';
interface PullEnvOptions {
    envFile: string;
}
export declare function pullEnv(app: AppInterface, { envFile }: PullEnvOptions): Promise<OutputMessage>;
export declare function updateEnvFile(app: AppInterface, envFile: PullEnvOptions['envFile']): Promise<OutputMessage>;
export {};
