import type { NormalizedRequest, NormalizedResponse } from '.';
export interface CookieData {
    name: string;
    value: string;
    /**
     * a number representing the milliseconds from Date.now() for expiry
     */
    maxAge?: number;
    /**
     * a Date object indicating the cookie's expiration
     * date (expires at the end of session by default).
     */
    expires?: Date;
    /**
     * a string indicating the path of the cookie (/ by default).
     */
    path?: string;
    /**
     * a string indicating the domain of the cookie (no default).
     */
    domain?: string;
    /**
     * a boolean indicating whether the cookie is only to be sent
     * over HTTPS (false by default for HTTP, true by default for HTTPS).
     */
    secure?: boolean;
    /**
     * a boolean indicating whether the cookie is only to be sent over HTTP(S),
     * and not made available to client JavaScript (true by default).
     */
    httpOnly?: boolean;
    /**
     * a boolean or string indicating whether the cookie is a "same site" cookie (false by default).
     * This can be set to 'strict', 'lax', or true (which maps to 'strict').
     */
    sameSite?: 'strict' | 'lax' | 'none';
}
export interface CookieJar {
    [key: string]: CookieData;
}
interface CookiesOptions {
    keys: string[];
    secure: boolean;
}
export declare class Cookies {
    response: NormalizedResponse;
    static parseCookies(hdrs: string[]): CookieJar;
    static encodeCookie(data: CookieData): string;
    receivedCookieJar: CookieJar;
    outgoingCookieJar: CookieJar;
    private keys;
    constructor(request: NormalizedRequest, response: NormalizedResponse, { keys }?: Partial<CookiesOptions>);
    toHeaders(): string[];
    updateHeader(): void;
    get(name: string): string | undefined;
    deleteCookie(name: string): void;
    getAndVerify(name: string): Promise<string | undefined>;
    private get canSign();
    set(name: string, value: string, opts?: Partial<CookieData>): void;
    setAndSign(name: string, value: string, opts?: Partial<CookieData>): Promise<void>;
    isSignedCookieValid(cookieName: string): Promise<boolean>;
}
export {};
//# sourceMappingURL=cookies.d.ts.map