/// <reference types="react" />
import ScalarDict from './ScalarDict.js';
import { ForegroundColor } from 'chalk';
export type TableColumn<T> = {
    [column in keyof T]: {
        header?: string;
        color?: ForegroundColor | 'dim';
    };
};
export interface TableProps<T extends ScalarDict> {
    rows: T[];
    columns: TableColumn<T>;
}
declare function Table<T extends ScalarDict>({ rows, columns: columnsConfiguration }: TableProps<T>): JSX.Element;
export { Table };
