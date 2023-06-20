import { FatalError, AbortError, ExtendableError } from './error.js';
/**
 * Utility metho to create an `Ok` result from a `value`
 *
 * @param value - `value` used to crete the `Result`
 * @returns an instance of a `Ok` `Result` inferring its type
 */
export const ok = (value) => new Ok(value);
/**
 * Utility method to create an `Error` result from an `error`
 *
 * @param err - `error` used to crete the `Result`
 * @returns an instance of an `Error` `Result` inferring its type
 */
export const err = (err) => new Err(err);
export class Ok {
    constructor(value) {
        this.value = value;
    }
    /**
     * Check if a `Result` is an `Err` inferring its type. `!isErr()` should be used before accessing the `value`
     *
     * @returns `false` as the `Resul` is `OK`
     */
    isErr() {
        return false;
    }
    /**
     * Runs the `handler` method an return the same an unaltered copy of the `Result`. It could be used to log an
     * output when the result is `Ok` without breaking the flow
     *
     * @param handler - method to be run when the result is `Ok`
     * @returns a copy of the same `Result`
     */
    doOnOk(handler) {
        handler(this.value);
        return ok(this.value);
    }
    /**
     * A safe mode to throw the `error` of the `Result`
     */
    valueOrBug() {
        return this.value;
    }
    /**
     * Throws an abort error if the result doesn't represent a value.
     */
    valueOrAbort() {
        return this.value;
    }
    /**
     * Maps the value to another one with a different type. It leaves the `Error` type unaltered
     *
     * @param mapper - The mapper method to apply an `OK` value
     * @returns a new result with the new mapped value
     */
    map(mapper) {
        return ok(mapper(this.value));
    }
    /**
     * Maps the error type to another one. It leaves the `Ok` type and value unaltered
     *
     * @param _mapper - This mapper method is not used for an `Ok` value
     * @returns a new result with the new mapped error type and an value
     */
    mapError(_mapper) {
        return ok(this.value);
    }
}
export class Err {
    // eslint-disable-next-line node/handle-callback-err
    constructor(error) {
        this.error = error;
    }
    /**
     * Check if a `Result` is an `Err` inferring its type. `!isErr()` should be used before accessing the `value`
     *
     * @returns `false` as the `Resul` is `OK`
     */
    isErr() {
        return true;
    }
    /**
     * Return an unaltered copy of the `Error` without doing anything.
     *
     * @param _handler - This handler method is not used for an `Error`
     * @returns a copy of the same `Error`
     */
    doOnOk(_handler) {
        return err(this.error);
    }
    /**
     * A safe mode to throw the `error` of the `Result`
     */
    valueOrBug() {
        throw this.error;
    }
    /**
     * Throws an abort error if the result doesn't represent a value.
     */
    valueOrAbort() {
        if (this.error instanceof FatalError) {
            throw this.error;
        }
        else if (this.error instanceof ExtendableError || this.error instanceof Error) {
            const error = new AbortError(this.error.message);
            error.stack = this.error.stack;
            throw error;
        }
        else {
            throw new AbortError(`${this.error}`);
        }
    }
    /**
     * Maps the value type to another one. It leaves the `Error` unaltered
     *
     * @param _mapper - This mapper method is not used for an `Error` value
     * @returns a new result with the new value type and an unaltered error
     */
    map(_mapper) {
        return err(this.error);
    }
    /**
     * Maps the error to another one with a different type. It leaves the value type unaltered
     *
     * @param mapper - The mapper method to apply an `Error` value
     * @returns a new result with the new mapped error
     */
    mapError(mapper) {
        return err(mapper(this.error));
    }
}
//# sourceMappingURL=result.js.map