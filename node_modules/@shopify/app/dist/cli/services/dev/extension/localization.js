import { joinPath } from '@shopify/cli-kit/node/path';
import { readFile, glob } from '@shopify/cli-kit/node/fs';
import { ExtendableError } from '@shopify/cli-kit/node/error';
import { outputInfo, outputWarn } from '@shopify/cli-kit/node/output';
export async function getLocalizationFilePaths(extension) {
    const localePath = joinPath(extension.directory, 'locales');
    return glob([joinPath(localePath, '*.json')]);
}
export async function getLocalization(extension, options) {
    const localeFiles = await getLocalizationFilePaths(extension);
    if (!localeFiles.length) {
        return { localization: undefined, status: '' };
    }
    const localization = options.currentLocalizationPayload
        ? options.currentLocalizationPayload
        : {
            defaultLocale: 'en',
            translations: {},
            lastUpdated: 0,
        };
    let status = 'success';
    try {
        await Promise.all(localeFiles.map(async (localeFile) => {
            const [locale, ...fileNameSegments] = localeFile.split('/').pop().split('.');
            if (locale) {
                if (fileNameSegments[0] === 'default') {
                    localization.defaultLocale = locale;
                }
                return compileLocalizationFiles(locale, localeFile, localization, extension, options);
            }
        }));
        localization.lastUpdated = Date.now();
        outputInfo(`Parsed locales for extension ${extension.configuration.name} at ${extension.directory}`, options.stdout);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-catch-all/no-catch-all
    }
    catch (error) {
        status = 'error';
    }
    return {
        localization,
        status,
    };
}
async function compileLocalizationFiles(locale, path, localization, extension, options) {
    let localeContent;
    try {
        localeContent = await readFile(path);
        localization.translations[locale] = JSON.parse(localeContent);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        const message = `Error parsing ${locale} locale for ${extension.configuration.name} at ${path}: ${error.message}`;
        outputWarn(message, options.stderr);
        throw new ExtendableError(message);
    }
}
//# sourceMappingURL=localization.js.map