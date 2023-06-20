import { Signal } from './killer';
declare type Ports = number | number[] | string | string[];
export interface Options {
    signal: Signal;
}
export declare function killPortProcess(inputPorts: Ports, inputOptions?: Partial<Options>): Promise<void>;
export {};
//# sourceMappingURL=index.d.ts.map