export declare function loadLocalesConfig(extensionPath: string, extensionIdentifier: string): Promise<{
    default_locale?: undefined;
    translations?: undefined;
} | {
    default_locale: string | undefined;
    translations: {
        [key: string]: string;
    };
}>;
