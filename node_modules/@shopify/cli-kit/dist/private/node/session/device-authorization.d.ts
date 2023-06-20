import { IdentityToken } from './schema.js';
export interface DeviceAuthorizationResponse {
    deviceCode: string;
    userCode: string;
    verificationUri: string;
    expiresIn: number;
    verificationUriComplete?: string;
    interval?: number;
}
/**
 * Initiate a device authorization flow.
 * This will return a DeviceAuthorizationResponse containing the URL where user
 * should go to authorize the device without the need of a callback to the CLI.
 *
 * Also returns a `deviceCode` used for polling the token endpoint in the next step.
 *
 * @param scopes - The scopes to request
 * @returns An object with the device authorization response.
 */
export declare function requestDeviceAuthorization(scopes: string[]): Promise<DeviceAuthorizationResponse>;
/**
 * Poll the Oauth token endpoint with the device code obtained from a DeviceAuthorizationResponse.
 * The endpoint will return `authorization_pending` until the user completes the auth flow in the browser.
 * Once the user completes the auth flow, the endpoint will return the identity token.
 *
 * Timeout for the polling is defined by the server and is around 600 seconds.
 *
 * @param code - The device code obtained after starting a device identity flow
 * @param interval - The interval to poll the token endpoint
 * @returns The identity token
 */
export declare function pollForDeviceAuthorization(code: string, interval?: number): Promise<IdentityToken>;
