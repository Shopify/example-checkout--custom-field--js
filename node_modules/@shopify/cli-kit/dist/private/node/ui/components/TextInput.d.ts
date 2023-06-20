import type { FunctionComponent } from 'react';
interface TextInputProps {
    defaultValue?: string;
    value: string;
    onChange: (value: string) => void;
    color?: string;
    password?: boolean;
    focus?: boolean;
    placeholder?: string;
}
declare const TextInput: FunctionComponent<TextInputProps>;
export { TextInput };
