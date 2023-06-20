/// <reference types="node" resolution-mode="require"/>
import { Writable } from 'stream';
interface SendUninstallWebhookToAppServerOptions {
    stdout: Writable;
    token: string;
    storeFqdn: string;
    address: string;
    sharedSecret: string;
}
export declare function sendUninstallWebhookToAppServer(options: SendUninstallWebhookToAppServerOptions): Promise<boolean>;
export {};
