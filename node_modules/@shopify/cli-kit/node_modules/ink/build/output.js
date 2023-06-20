import sliceAnsi from 'slice-ansi';
import stringWidth from 'string-width';
export default class Output {
    constructor(options) {
        Object.defineProperty(this, "width", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "height", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Initialize output array with a specific set of rows, so that margin/padding at the bottom is preserved
        Object.defineProperty(this, "writes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        const { width, height } = options;
        this.width = width;
        this.height = height;
    }
    write(x, y, text, options) {
        const { transformers } = options;
        if (!text) {
            return;
        }
        this.writes.push({ x, y, text, transformers });
    }
    get() {
        const output = [];
        for (let y = 0; y < this.height; y++) {
            output.push(' '.repeat(this.width));
        }
        for (const write of this.writes) {
            const { x, y, text, transformers } = write;
            const lines = text.split('\n');
            let offsetY = 0;
            for (let line of lines) {
                const currentLine = output[y + offsetY];
                // Line can be missing if `text` is taller than height of pre-initialized `this.output`
                if (!currentLine) {
                    continue;
                }
                const width = stringWidth(line);
                for (const transformer of transformers) {
                    line = transformer(line);
                }
                output[y + offsetY] =
                    sliceAnsi(currentLine, 0, x) +
                        line +
                        sliceAnsi(currentLine, x + width);
                offsetY++;
            }
        }
        const generatedOutput = output.map(line => line.trimEnd()).join('\n');
        return {
            output: generatedOutput,
            height: output.length
        };
    }
}
//# sourceMappingURL=output.js.map