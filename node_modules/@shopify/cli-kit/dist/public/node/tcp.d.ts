/**
 * Returns an available port in the current environment.
 *
 * @returns A promise that resolves with an availabe port.
 * @example
 */
export declare function getAvailableTCPPort(): Promise<number>;
/**
 * Checks if a port is available.
 *
 * @param portNumber - The port number to check.
 */
export declare function checkPortAvailability(portNumber: number): Promise<boolean>;
