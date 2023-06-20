import { replaceInvalidCharacters } from './replace-invalid-characters.js';
import { randomBytes } from 'crypto';
import { hostname } from 'os';
export const API_NAME_LIMIT = 50;
export function generateThemeName(context) {
    const hostNameWithoutDomain = hostname().split('.')[0];
    const hash = randomBytes(3).toString('hex');
    const name = `${context} ()`;
    const hostNameCharacterLimit = API_NAME_LIMIT - name.length - hash.length - 1;
    const identifier = replaceInvalidCharacters(`${hash}-${hostNameWithoutDomain.substring(0, hostNameCharacterLimit)}`);
    return `${context} (${identifier})`;
}
//# sourceMappingURL=generate-theme-name.js.map