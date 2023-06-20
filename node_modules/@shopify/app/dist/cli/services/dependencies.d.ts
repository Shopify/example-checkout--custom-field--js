import { AppInterface } from '../models/app/app.js';
/**
 * Given an app, it installs its NPM dependencies by traversing
 * the sub-directories and finding the ones that have NPM dependencies
 * defined in package.json files.
 * @param app - App whose dependencies will be installed.
 * @returns An copy of the app with the Node dependencies updated.
 */
export declare function installAppDependencies(app: AppInterface): Promise<AppInterface>;
