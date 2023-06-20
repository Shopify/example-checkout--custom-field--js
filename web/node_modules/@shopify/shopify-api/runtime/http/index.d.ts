import type { AbstractFetchFunc, AbstractConvertRequestFunc, AbstractConvertIncomingResponseFunc, AbstractConvertResponseFunc, NormalizedResponse, AbstractConvertHeadersFunc } from './types';
export * from './cookies';
export * from './headers';
export * from './utils';
export * from './types';
export declare function isOK(resp: NormalizedResponse): boolean;
export declare let abstractFetch: AbstractFetchFunc;
export declare function setAbstractFetchFunc(func: AbstractFetchFunc): void;
export declare let abstractConvertRequest: AbstractConvertRequestFunc;
export declare function setAbstractConvertRequestFunc(func: AbstractConvertRequestFunc): void;
export declare let abstractConvertIncomingResponse: AbstractConvertIncomingResponseFunc;
export declare function setAbstractConvertIncomingResponseFunc(func: AbstractConvertIncomingResponseFunc): void;
export declare let abstractConvertResponse: AbstractConvertResponseFunc;
export declare function setAbstractConvertResponseFunc(func: AbstractConvertResponseFunc): void;
export declare let abstractConvertHeaders: AbstractConvertHeadersFunc;
export declare function setAbstractConvertHeadersFunc(func: AbstractConvertHeadersFunc): void;
//# sourceMappingURL=index.d.ts.map