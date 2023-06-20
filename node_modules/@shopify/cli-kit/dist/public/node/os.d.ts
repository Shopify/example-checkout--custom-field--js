/**
 * @param platform - The platform to get the username for. Defaults to the current platform.
 * @returns The username of the current user.
 */
export declare function username(platform?: typeof process.platform): Promise<string | null>;
type PlatformArch = Exclude<typeof process.arch, 'x64' | 'ia32'> | 'amd64' | '386';
type PlatformStrings = Exclude<typeof process.platform, 'win32'> | 'windows';
/**
 * Returns the platform and architecture.
 * @returns Returns the current platform and architecture.
 */
export declare function platformAndArch(platform?: typeof process.platform, arch?: typeof process.arch): {
    platform: PlatformStrings;
    arch: PlatformArch;
};
export {};
