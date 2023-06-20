/**
 * Renders a template using the Liquid template engine.
 *
 * @param templateContent - Template content.
 * @param data - Data to feed the template engine.
 * @returns Rendered template.
 */
export declare function renderLiquidTemplate(templateContent: string, data: object): Promise<string>;
/**
 * Given a directory, it traverses the files and directories recursively
 * and replaces variables in directory and file names, and files' content
 * using the Liquid template engine.
 * Files indicate that they are liquid template by using the .liquid extension.
 *
 * @param from - Directory that contains the template.
 * @param to - Output directory.
 * @param data - Data to feed the template engine.
 */
export declare function recursiveLiquidTemplateCopy(from: string, to: string, data: object): Promise<void>;
