interface ZipOptions {
    /**
     * The absolute path to the directory to be zipped.
     */
    inputDirectory: string;
    /**
     * The absolute path to the output zip file.
     */
    outputZipPath: string;
    /**
     * Pattern to match when adding files to zip, uses glob expressions.
     */
    matchFilePattern?: string;
}
/**
 * It zips a directory and by default normalizes the paths to be forward-slash.
 * Even with forward-slash paths, zip files should still be able to be opened on
 * Windows.
 *
 * @param options - ZipOptions.
 */
export declare function zip(options: ZipOptions): Promise<void>;
export {};
