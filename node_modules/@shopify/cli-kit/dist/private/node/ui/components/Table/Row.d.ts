/// <reference types="react" />
import ScalarDict from './ScalarDict.js';
import { Column } from './Column.js';
interface RowProps<T extends ScalarDict> {
    fillerChar: string;
    rowKey: string;
    data: Partial<T>;
    columns: Column<T>[];
    ignoreColumnColor?: boolean;
}
declare const Row: <T extends ScalarDict>({ rowKey, columns, data, fillerChar, ignoreColumnColor }: RowProps<T>) => JSX.Element;
export { Row };
