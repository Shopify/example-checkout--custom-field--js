import { Organization, OrganizationApp } from '../../models/organization.js';
import { OrganizationAppsResponse } from '../dev/fetch.js';
/**
 * Select an app from env, list or create a new one:
 * If a cachedAppId is provided, we check if it is valid and return it. If it's not valid, ignore it.
 * If there is no valid app yet, prompt the user to select one from the list or create a new one.
 * If no apps exists, we automatically prompt the user to create a new one.
 * @param app - Current local app information
 * @param apps - List of remote available apps
 * @param orgId - Current Organization
 * @param cachedAppId - Cached app apikey
 * @returns The selected (or created) app
 */
export declare function selectOrCreateApp(localAppName: string, apps: OrganizationAppsResponse, org: Organization, token: string): Promise<OrganizationApp>;
export declare function createApp(org: Organization, appName: string, token: string): Promise<OrganizationApp>;
