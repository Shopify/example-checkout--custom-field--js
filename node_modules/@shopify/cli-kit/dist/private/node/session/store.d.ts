import type { Session } from './schema.js';
/**
 * The identifier of the session in the secure store.
 */
export declare const identifier = "session";
/**
 * Serializes the session as a JSON and stores it securely in the system.
 * If the secure store is not available, the session is stored in the local config.
 * @param session - the session to store.
 */
export declare function store(session: Session): Promise<void>;
/**
 * Fetches the session from the secure store and returns it.
 * If the secure store is not available, the session is fetched from the local config.
 * If the format of the session is invalid, the method will discard it.
 * In the future might add some logic for supporting migrating the schema
 * of already-persisted sessions.
 * @returns Returns a promise that resolves with the session if it exists and is valid.
 */
export declare function fetch(): Promise<Session | undefined>;
/**
 * Removes a session from the system.
 */
export declare function remove(): Promise<void>;
