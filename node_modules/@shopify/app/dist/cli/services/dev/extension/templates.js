import { renderLiquidTemplate } from '@shopify/cli-kit/node/liquid';
import { joinPath, moduleDirectory } from '@shopify/cli-kit/node/path';
import { readFile, glob, findPathUp } from '@shopify/cli-kit/node/fs';
import { BugError } from '@shopify/cli-kit/node/error';
export class TemplateNotFoundError extends BugError {
    constructor(options) {
        super(`Couldn't find template ${options.template} for extension surface ${options.extensionSurface}`);
    }
}
export async function getHTML(options) {
    const templatePath = await getTemplatePath(options);
    const templateContent = await readFile(templatePath);
    return renderLiquidTemplate(templateContent, options.data);
}
export async function getTemplatePath(options) {
    const templatesDirectory = await getTemplatesDirectory();
    const globPatterns = [];
    if (options.extensionSurface) {
        globPatterns.push(joinPath(templatesDirectory, `${options.extensionSurface}/${options.template}.html.liquid`));
    }
    globPatterns.push(joinPath(templatesDirectory, `${options.template}.html.liquid`));
    const globMatches = await glob(globPatterns);
    if (globMatches.length === 0) {
        throw new TemplateNotFoundError(options);
    }
    return globMatches[0];
}
export async function getTemplatesDirectory() {
    const directory = await findPathUp('templates/ui-extensions/html', {
        type: 'directory',
        cwd: moduleDirectory(import.meta.url),
    });
    return directory;
}
//# sourceMappingURL=templates.js.map