export type Result<TValue, TError> = Ok<TValue, TError> | Err<TValue, TError>;
/**
 * Utility metho to create an `Ok` result from a `value`
 *
 * @param value - `value` used to crete the `Result`
 * @returns an instance of a `Ok` `Result` inferring its type
 */
export declare const ok: <TValue, TError = never>(value: TValue) => Ok<TValue, TError>;
/**
 * Utility method to create an `Error` result from an `error`
 *
 * @param err - `error` used to crete the `Result`
 * @returns an instance of an `Error` `Result` inferring its type
 */
export declare const err: <TValue = never, TError = unknown>(err: TError) => Err<TValue, TError>;
export declare class Ok<TValue, TError> {
    readonly value: TValue;
    constructor(value: TValue);
    /**
     * Check if a `Result` is an `Err` inferring its type. `!isErr()` should be used before accessing the `value`
     *
     * @returns `false` as the `Resul` is `OK`
     */
    isErr(): this is Err<TValue, TError>;
    /**
     * Runs the `handler` method an return the same an unaltered copy of the `Result`. It could be used to log an
     * output when the result is `Ok` without breaking the flow
     *
     * @param handler - method to be run when the result is `Ok`
     * @returns a copy of the same `Result`
     */
    doOnOk(handler: (value: TValue) => void): Result<TValue, TError>;
    /**
     * A safe mode to throw the `error` of the `Result`
     */
    valueOrBug(): TValue;
    /**
     * Throws an abort error if the result doesn't represent a value.
     */
    valueOrAbort(): TValue;
    /**
     * Maps the value to another one with a different type. It leaves the `Error` type unaltered
     *
     * @param mapper - The mapper method to apply an `OK` value
     * @returns a new result with the new mapped value
     */
    map<TMappedValue>(mapper: (value: TValue) => TMappedValue): Result<TMappedValue, TError>;
    /**
     * Maps the error type to another one. It leaves the `Ok` type and value unaltered
     *
     * @param _mapper - This mapper method is not used for an `Ok` value
     * @returns a new result with the new mapped error type and an value
     */
    mapError<TMappedError>(_mapper: (error: TError) => TMappedError): Result<TValue, TMappedError>;
}
export declare class Err<TValue, TError> {
    readonly error: TError;
    constructor(error: TError);
    /**
     * Check if a `Result` is an `Err` inferring its type. `!isErr()` should be used before accessing the `value`
     *
     * @returns `false` as the `Resul` is `OK`
     */
    isErr(): this is Err<TValue, TError>;
    /**
     * Return an unaltered copy of the `Error` without doing anything.
     *
     * @param _handler - This handler method is not used for an `Error`
     * @returns a copy of the same `Error`
     */
    doOnOk(_handler: (value: TValue) => void): Result<TValue, TError>;
    /**
     * A safe mode to throw the `error` of the `Result`
     */
    valueOrBug(): TValue;
    /**
     * Throws an abort error if the result doesn't represent a value.
     */
    valueOrAbort(): TValue;
    /**
     * Maps the value type to another one. It leaves the `Error` unaltered
     *
     * @param _mapper - This mapper method is not used for an `Error` value
     * @returns a new result with the new value type and an unaltered error
     */
    map<TMappedValue>(_mapper: (valueOrBug: TValue) => TMappedValue): Result<TMappedValue, TError>;
    /**
     * Maps the error to another one with a different type. It leaves the value type unaltered
     *
     * @param mapper - The mapper method to apply an `Error` value
     * @returns a new result with the new mapped error
     */
    mapError<TMappedError>(mapper: (error: TError) => TMappedError): Result<TValue, TMappedError>;
}
