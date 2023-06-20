import { Request, Response } from 'express';
import { Shopify } from '@shopify/shopify-api';
import { CspHeadersMiddleware } from './types';
interface CspHeadersParams {
    api: Shopify;
}
export declare function cspHeaders({ api }: CspHeadersParams): CspHeadersMiddleware;
export declare function addCSPHeader(api: Shopify, req: Request, res: Response): void;
export {};
//# sourceMappingURL=csp-headers.d.ts.map