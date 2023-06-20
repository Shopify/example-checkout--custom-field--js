export interface CodeAuthResult {
    code: string;
    codeVerifier: string;
}
export declare function authorize(scopes: string[], state?: string): Promise<CodeAuthResult>;
