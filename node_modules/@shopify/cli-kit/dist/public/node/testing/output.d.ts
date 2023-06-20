interface OutputMock {
    output: () => string;
    info: () => string;
    debug: () => string;
    success: () => string;
    completed: () => string;
    warn: () => string;
    error: () => string;
    clear: () => void;
}
/**
 * Returns a set of functions to get the outputs ocurred during a test run.
 *
 * @returns An mock object with all the output functions.
 */ export declare function mockAndCaptureOutput(): OutputMock;
export {};
