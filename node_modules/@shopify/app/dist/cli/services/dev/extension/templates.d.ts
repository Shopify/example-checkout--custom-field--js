import { BugError } from '@shopify/cli-kit/node/error';
export interface GetHTMLOptions {
    extensionSurface?: string;
    template: Template;
    data: any;
}
export type Template = 'index' | 'tunnel-error' | 'error';
export declare class TemplateNotFoundError extends BugError {
    constructor(options: GetHTMLOptions);
}
export declare function getHTML(options: GetHTMLOptions): Promise<string>;
export declare function getTemplatePath(options: GetHTMLOptions): Promise<string>;
export declare function getTemplatesDirectory(): Promise<string>;
