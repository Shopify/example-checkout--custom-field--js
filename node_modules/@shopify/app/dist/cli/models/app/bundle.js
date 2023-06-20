import { zod } from '@shopify/cli-kit/node/schema';
export const BundleUIExtensionSchema = zod.object({
    /** The extension UUID */
    id: zod.string(),
    /** The relative path to the Javascript bundle. */
    bundlePath: zod.string(),
});
export const BundleThemeExtensionSchema = zod.object({
    /** The extension UUID */
    id: zod.string(),
    /** A list of paths to the files that are part of the schema. */
    filePaths: zod.array(zod.string()),
});
export const BundleFunctionExtensionSchema = zod.object({
    /** The extension UUID */
    id: zod.string(),
    /** The path to the .wasm file of the function. */
    wasmPath: zod.string(),
});
export const BundleSchema = zod.object({
    /** The application API key */
    id: zod.string(),
    /** The collection of extensions that are part of the bundle */
    extensions: zod.object({
        /** UI extensions */
        ui: zod.array(BundleUIExtensionSchema),
        /** Theme extensions */
        theme: zod.array(BundleThemeExtensionSchema),
        /** Function extensions */
        function: zod.array(BundleFunctionExtensionSchema),
    }),
});
//# sourceMappingURL=bundle.js.map