import { getFavicon, getStylesheet, getEmptyUrlHTML, getAuthErrorHTML, getMissingCodeHTML, getMissingStateHTML, getSuccessHTML, EmptyUrlString, MissingCodeString, MissingStateString, } from './post-auth.js';
import { AbortError, BugError } from '../../../public/node/error.js';
import { outputContent, outputInfo, outputToken } from '../../../public/node/output.js';
import url from 'url';
import { createServer } from 'http';
const ResponseTimeoutSeconds = 10;
const ServerStopDelaySeconds = 0.5;
/**
 * When the authentication completes, Identity redirects
 * the user to a URL. In the case of the CLI, the redirect
 * is to localhost passing some parameters that are necessary
 * to continue the authentication. Because of that, we need
 * an HTTP server that runs and listens to the request.
 */
export class RedirectListener {
    static createServer(callback) {
        const app = async (request, response) => {
            const requestUrl = request.url;
            if (requestUrl?.includes('favicon')) {
                const faviconFile = await getFavicon();
                response.setHeader('Content-Type', 'image/svg+xml');
                response.write(faviconFile);
                response.end();
                return {};
            }
            else if (requestUrl === '/style.css') {
                const stylesheetFile = await getStylesheet();
                response.setHeader('Content-Type', 'text/css');
                response.write(stylesheetFile);
                response.end();
                return {};
            }
            const respond = async (contents, error, state, code) => {
                response.setHeader('Content-Type', 'text/html');
                response.write(contents);
                response.end();
                callback(error, state, code);
                return {};
            };
            // If there was an empty/malformed URL sent back.
            if (!requestUrl) {
                const file = await getEmptyUrlHTML();
                const err = new BugError(EmptyUrlString);
                return respond(file, err, undefined, undefined);
            }
            // If an error was returned by the Identity server.
            const queryObject = url.parse(requestUrl, true).query;
            if (queryObject.error && queryObject.error_description) {
                const file = await getAuthErrorHTML();
                const err = new AbortError(`${queryObject.error_description}`);
                return respond(file, err, undefined, undefined);
            }
            // If the code isn't present in the URL.
            if (!queryObject.code) {
                const file = await getMissingCodeHTML();
                const err = new BugError(MissingCodeString);
                return respond(file, err, undefined, undefined);
            }
            // If the state isn't present in the URL.
            if (!queryObject.state) {
                const file = await getMissingStateHTML();
                const err = new BugError(MissingStateString);
                return respond(file, err, undefined, undefined);
            }
            const file = await getSuccessHTML();
            return respond(file, undefined, `${queryObject.code}`, `${queryObject.state}`);
        };
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        return createServer(app);
    }
    constructor(options) {
        this.port = options.port;
        this.host = options.host;
        this.server = RedirectListener.createServer(options.callback);
    }
    start() {
        this.server.listen({ port: this.port, host: this.host }, () => { });
    }
    async stop() {
        await this.server.close();
    }
}
export async function listenRedirect(host, port, url) {
    const result = await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            const message = '\nAuto-open timed out. Open the login page: ';
            outputInfo(outputContent `${message}${outputToken.link('Log in to Shopify Partners', url)}\n`);
        }, ResponseTimeoutSeconds * 1000);
        const callback = (error, code, state) => {
            clearTimeout(timeout);
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                redirectListener.stop();
                if (error)
                    reject(error);
                else
                    resolve({ code: code, state: state });
            }, ServerStopDelaySeconds * 1000);
        };
        const redirectListener = new RedirectListener({ host, port, callback });
        redirectListener.start();
    });
    return result;
}
//# sourceMappingURL=redirect-listener.js.map