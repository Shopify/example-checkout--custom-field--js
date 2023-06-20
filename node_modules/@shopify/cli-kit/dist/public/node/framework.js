import { joinPath } from './path.js';
import { existsSync, readFileSync } from 'fs';
const frameworks = [
    {
        name: 'remix',
        detectors: {
            every: [
                {
                    path: 'package.json',
                    matchContent: '"(dev)?(d|D)ependencies":\\s*{[^}]*"@remix-run\\/.*":\\s*".+?"[^}]*}',
                },
                {
                    path: 'package.json',
                    matchContent: '"(dev)?(d|D)ependencies":\\s*{[^}]*"react":\\s*".+?"[^}]*}',
                },
            ],
        },
    },
    {
        name: 'nextjs',
        detectors: {
            every: [
                {
                    path: 'package.json',
                    matchContent: '"(dev)?(d|D)ependencies":\\s*{[^}]*"next":\\s*".+?"[^}]*}',
                },
                {
                    path: 'package.json',
                    matchContent: '"(dev)?(d|D)ependencies":\\s*{[^}]*"react":\\s*".+?"[^}]*}',
                },
            ],
        },
    },
    {
        name: 'express',
        detectors: {
            every: [
                {
                    path: 'package.json',
                    matchContent: '"(dev)?(d|D)ependencies":\\s*{[^}]*"express":\\s*".+?"[^}]*}',
                },
            ],
        },
    },
    {
        name: 'rails',
        detectors: {
            every: [
                {
                    path: 'Gemfile',
                    matchContent: 'gem "rails"',
                },
            ],
        },
    },
    {
        name: 'flask',
        detectors: {
            every: [
                {
                    path: 'Pipfile',
                    matchContent: 'flask',
                },
            ],
        },
    },
    {
        name: 'django',
        detectors: {
            every: [
                {
                    path: 'Pipfile',
                    matchContent: 'django',
                },
            ],
        },
    },
    {
        name: 'laravel',
        detectors: {
            every: [
                {
                    path: 'composer.json',
                    matchContent: '"require":\\s*{[^}]*"laravel/framework":\\s*".+?"[^}]*}',
                },
            ],
        },
    },
    {
        name: 'symfony',
        detectors: {
            every: [
                {
                    path: 'composer.json',
                    matchContent: '"require":\\s*{[^}]*"symfony\\/.*":\\s*".+?"[^}]*}',
                },
            ],
        },
    },
];
/**
 * Tries to identify the using of a framework analyzing the existence and/or content of different files inside a
 * specific directory.
 *
 * @param rootDirectory - Directory from which the files required for each framework are searched
 * @returns The name of the framework used or 'unknown' otherwise
 */
export async function resolveFramework(rootDirectory) {
    const fwConfigFiles = {};
    const matchedFramework = frameworks.find((framework) => (!framework.detectors?.some ||
        framework.detectors?.some?.reduce((_previousDetectorsMatch, detector) => matchDetector(detector, loadFwConfigFile(rootDirectory, detector.path, fwConfigFiles)), false)) &&
        (!framework.detectors?.every ||
            framework.detectors?.every?.reduce((previousDetectorsMatch, detector) => previousDetectorsMatch
                ? matchDetector(detector, loadFwConfigFile(rootDirectory, detector.path, fwConfigFiles))
                : false, true)));
    return matchedFramework ? matchedFramework.name : 'unknown';
}
function matchDetector(detector, fwConfigFiles = {}) {
    if (!fwConfigFiles[detector.path])
        return false;
    return !detector.matchContent || new RegExp(detector.matchContent).test(fwConfigFiles[detector.path]);
}
function loadFwConfigFile(rootPath, fwConfigFileName, fwConfigFiles = {}) {
    if (fwConfigFiles[fwConfigFileName]) {
        return fwConfigFiles;
    }
    const fwConfigFilePath = joinPath(rootPath, fwConfigFileName);
    if (!existsSync(fwConfigFilePath)) {
        return fwConfigFiles;
    }
    const rawContent = readFileSync(fwConfigFilePath, { encoding: 'utf8' });
    fwConfigFiles[fwConfigFileName] = rawContent;
    return fwConfigFiles;
}
//# sourceMappingURL=framework.js.map