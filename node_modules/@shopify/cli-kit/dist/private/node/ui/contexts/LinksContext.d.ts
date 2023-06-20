import React from 'react';
export interface Link {
    label: string | undefined;
    url: string;
}
export interface ContextValue {
    links: React.RefObject<{
        [key: string]: Link;
    }>;
    addLink: (label: string | undefined, url: string) => string;
}
export declare const LinksContext: React.Context<ContextValue | null>;
