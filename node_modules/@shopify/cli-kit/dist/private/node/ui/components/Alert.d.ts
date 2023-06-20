import { BannerType } from './Banner.js';
import { BoldToken, InlineToken, LinkToken, TokenItem } from './TokenizedText.js';
import { FunctionComponent } from 'react';
export interface CustomSection {
    title?: string;
    body: TokenItem;
}
export interface AlertProps {
    type: Exclude<BannerType, 'error' | 'external_error'>;
    headline?: TokenItem<Exclude<InlineToken, LinkToken | BoldToken>>;
    body?: TokenItem;
    nextSteps?: TokenItem<InlineToken>[];
    reference?: TokenItem<InlineToken>[];
    link?: {
        label: string;
        url: string;
    };
    orderedNextSteps?: boolean;
    customSections?: CustomSection[];
}
declare const Alert: FunctionComponent<AlertProps>;
export { Alert };
