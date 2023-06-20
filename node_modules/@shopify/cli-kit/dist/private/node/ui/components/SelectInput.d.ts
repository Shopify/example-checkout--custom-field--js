import React from 'react';
import { DOMElement } from 'ink';
declare module 'react' {
    function forwardRef<T, P>(render: (props: P, ref: React.Ref<T>) => JSX.Element | null): (props: P & React.RefAttributes<T>) => JSX.Element | null;
}
interface OnChangeOptions<T> {
    item: Item<T> | undefined;
    usedShortcut: boolean;
}
export interface SelectInputProps<T> {
    items: Item<T>[];
    onChange: ({ item, usedShortcut }: OnChangeOptions<T>) => void;
    enableShortcuts?: boolean;
    focus?: boolean;
    emptyMessage?: string;
    defaultValue?: Item<T>;
    highlightedTerm?: string;
    loading?: boolean;
    errorMessage?: string;
    hasMorePages?: boolean;
    morePagesMessage?: string;
    infoMessage?: string;
    limit?: number;
}
export interface Item<T> {
    label: string;
    value: T;
    key?: string;
    group?: string;
}
export declare const SelectInput: <T>(props: SelectInputProps<T> & React.RefAttributes<DOMElement>) => JSX.Element | null;
export {};
