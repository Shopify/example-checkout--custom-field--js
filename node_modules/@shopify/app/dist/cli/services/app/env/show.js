import { selectApp } from '../select-app.js';
import { outputContent, outputToken } from '@shopify/cli-kit/node/output';
export async function showEnv(app) {
    return outputEnv(app, 'text');
}
export async function outputEnv(app, format) {
    const selectedApp = await selectApp();
    if (format === 'json') {
        return outputContent `${outputToken.json({
            SHOPIFY_API_KEY: selectedApp.apiKey,
            SHOPIFY_API_SECRET: selectedApp.apiSecretKeys[0]?.secret,
            SCOPES: app.configuration.scopes,
        })}`;
    }
    else {
        return outputContent `
    ${outputToken.green('SHOPIFY_API_KEY')}=${selectedApp.apiKey}
    ${outputToken.green('SHOPIFY_API_SECRET')}=${selectedApp.apiSecretKeys[0]?.secret ?? ''}
    ${outputToken.green('SCOPES')}=${app.configuration.scopes}
  `;
    }
}
//# sourceMappingURL=show.js.map