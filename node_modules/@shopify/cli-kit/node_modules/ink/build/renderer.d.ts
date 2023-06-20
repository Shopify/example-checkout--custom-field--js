import { type DOMElement } from './dom.js';
type Result = {
    output: string;
    outputHeight: number;
    staticOutput: string;
};
declare const renderer: (node: DOMElement, terminalWidth: number) => Result;
export default renderer;
