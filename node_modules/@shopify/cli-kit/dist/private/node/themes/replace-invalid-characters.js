export function replaceInvalidCharacters(identifier) {
    const findAllMatches = 'g';
    const enablesUnicodeSupport = 'u';
    return identifier.replace(new RegExp(/[^\p{Letter}\p{Number}\p{Mark}-]/, `${findAllMatches}${enablesUnicodeSupport}`), '-');
}
//# sourceMappingURL=replace-invalid-characters.js.map