/**
 * Get the earliest date in the future when deprecations will no longer be supported, if any.
 *
 * @returns The next deprecation date.
 */
export declare function getNextDeprecationDate(): Date | undefined;
/**
 * Set the next deprecation date to the earliest date in the future.
 *
 * @param dates - Dates when deprecations will no longer be supported.
 */
export declare function setNextDeprecationDate(dates: Date[]): Date | undefined;
