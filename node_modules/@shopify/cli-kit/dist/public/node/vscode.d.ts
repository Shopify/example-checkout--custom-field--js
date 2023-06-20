/**
 * Check if user editor is VS Code.
 *
 * @param root - Root directory to start searching for .vscode directory.
 * @returns True if user editor is VS Code.
 */
export declare function isVSCode(root?: string): Promise<boolean>;
/**
 * Add VSCode extension recommendations.
 *
 * @param directory - Directory that contains the .vscode folder.
 * @param recommendations - List of VSCode extensions to recommend.
 */
export declare function addRecommendedExtensions(directory: string, recommendations: string[]): Promise<void>;
