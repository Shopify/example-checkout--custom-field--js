export async function validateUIExtensions(extensions) {
    return Promise.all(extensions.map((ext) => ext.preDeployValidation()));
}
//# sourceMappingURL=ui.js.map