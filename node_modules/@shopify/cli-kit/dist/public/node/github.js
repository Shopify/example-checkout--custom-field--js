import { err, ok } from './result.js';
import { fetch } from './http.js';
import { outputContent, outputDebug } from '../../public/node/output.js';
class GitHubClientError extends Error {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(url, statusCode, bodyJson) {
        super(`The request to GitHub API URL ${url} failed with status code ${statusCode} and the following error message: ${bodyJson.message}`);
    }
}
/**
 * Given a GitHub repository it obtains the latest release.
 * @param owner - Repository owner (e.g., shopify)
 * @param repo - Repository name (e.g., cli)
 * @param options - Options
 */
export async function getLatestGitHubRelease(owner, repo, options = { filter: () => true }) {
    outputDebug(outputContent `Getting the latest release of GitHub repository ${owner}/${repo}...`);
    const url = `https://api.github.com/repos/${owner}/${repo}/releases`;
    const fetchResult = await fetch(url);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jsonBody = await fetchResult.json();
    if (fetchResult.status !== 200) {
        throw new GitHubClientError(url, fetchResult.status, jsonBody);
    }
    return jsonBody.find(options.filter);
}
/**
 * Given a GitHub repository URL, it parses it and returns its coomponents.
 * @param url - The GitHub repository URL
 */
export function parseGitHubRepositoryURL(url) {
    const match = /^(?:(?:https:\/\/)?([^:/]+\.[^:/]+)\/|git@([^:/]+)[:/]|([^/]+):)?([^/\s]+)\/([^/\s#]+)(?:((?:\/[^/\s#]+)+))?(?:\/)?(?:#(.+))?/.exec(url);
    if (!match) {
        const exampleFormats = [
            'github:user/repo',
            'user/repo/subdirectory',
            'git@github.com:user/repo',
            'user/repo#dev',
            'https://github.com/user/repo',
        ];
        return err(new Error(`Parsing the url ${url} failed. Supported formats are ${exampleFormats.join(', ')}.`));
    }
    const site = match[1] || match[2] || match[3] || 'github.com';
    const normalizedSite = site === 'github' ? 'github.com' : site;
    const user = match[4];
    const name = match[5].replace(/\.git$/, '');
    const subDirectory = match[6]?.slice(1);
    const ref = match[7];
    const branch = ref ? `#${ref}` : '';
    const ssh = `git@${normalizedSite}:${user}/${name}`;
    const http = `https://${normalizedSite}/${user}/${name}`;
    const full = ['https:/', normalizedSite, user, name, subDirectory].join('/').concat(branch);
    return ok({ full, site: normalizedSite, user, name, ref, subDirectory, ssh, http });
}
/**
 * Given a GitHub repository URL it parses it and extracts the branch, file path,
 * and base URL components
 * @param reference - A GitHub repository URL (e.g. https://github.com/Shopify/cli/blob/main/package.json)
 */
export function parseGitHubRepositoryReference(reference) {
    const url = new URL(reference);
    const branch = url.hash ? url.hash.slice(1) : undefined;
    const [_, user, repo, ...repoPath] = url.pathname.split('/');
    const filePath = repoPath.length > 0 ? repoPath.join('/') : undefined;
    return {
        baseURL: `${url.origin}/${user}/${repo}`,
        branch,
        filePath,
    };
}
//# sourceMappingURL=github.js.map