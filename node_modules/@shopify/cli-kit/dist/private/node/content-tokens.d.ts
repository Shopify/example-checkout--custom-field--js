import { OutputMessage } from '../../public/node/output.js';
import type { Change } from 'diff';
export declare abstract class ContentToken<T> {
    value: T;
    constructor(value: T);
    abstract output(): string | string[];
}
export declare class RawContentToken extends ContentToken<string> {
    output(): string;
}
export declare class LinkContentToken extends ContentToken<OutputMessage> {
    link: string;
    constructor(value: OutputMessage, link: string);
    output(): string;
}
export declare class CommandContentToken extends ContentToken<OutputMessage> {
    output(): string;
}
export declare class JsonContentToken extends ContentToken<any> {
    output(): string;
}
export declare class LinesDiffContentToken extends ContentToken<Change[]> {
    output(): string[];
}
export declare class ColorContentToken extends ContentToken<OutputMessage> {
    color: (text: string) => string;
    constructor(value: OutputMessage, color: (text: string) => string);
    output(): string;
}
export declare class ErrorContentToken extends ContentToken<OutputMessage> {
    output(): string;
}
export declare class PathContentToken extends ContentToken<OutputMessage> {
    output(): string;
}
export declare class HeadingContentToken extends ContentToken<OutputMessage> {
    output(): string;
}
export declare class SubHeadingContentToken extends ContentToken<OutputMessage> {
    output(): string;
}
export declare class ItalicContentToken extends ContentToken<OutputMessage> {
    output(): string;
}
