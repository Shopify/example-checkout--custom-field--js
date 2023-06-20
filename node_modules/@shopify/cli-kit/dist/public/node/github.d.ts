import { Result } from './result.js';
export interface GithubRelease {
    id: number;
    url: string;
    tag_name: string;
    name: string;
    body: string;
    draft: boolean;
    prerelease: boolean;
    created_at: string;
    published_at: string;
    tarball_url: string;
}
interface GetLatestGitHubReleaseOptions {
    filter: (release: GithubRelease) => boolean;
}
/**
 * Given a GitHub repository it obtains the latest release.
 * @param owner - Repository owner (e.g., shopify)
 * @param repo - Repository name (e.g., cli)
 * @param options - Options
 */
export declare function getLatestGitHubRelease(owner: string, repo: string, options?: GetLatestGitHubReleaseOptions): Promise<GithubRelease>;
interface ParseRepositoryURLOutput {
    full: string;
    site: string;
    user: string;
    name: string;
    ref: string;
    subDirectory: string;
    ssh: string;
    http: string;
}
/**
 * Given a GitHub repository URL, it parses it and returns its coomponents.
 * @param url - The GitHub repository URL
 */
export declare function parseGitHubRepositoryURL(url: string): Result<ParseRepositoryURLOutput, Error>;
export interface GithubRepositoryReference {
    baseURL: string;
    branch?: string;
    filePath?: string;
}
/**
 * Given a GitHub repository URL it parses it and extracts the branch, file path,
 * and base URL components
 * @param reference - A GitHub repository URL (e.g. https://github.com/Shopify/cli/blob/main/package.json)
 */
export declare function parseGitHubRepositoryReference(reference: string): GithubRepositoryReference;
export {};
