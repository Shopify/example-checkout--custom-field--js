import { ConfigInterface } from '../base-types';
import { LoggerFunction } from './log';
import { LogContext } from './types';
export declare function logger(config: ConfigInterface): {
    log: LoggerFunction;
    debug: (message: string, context?: LogContext) => Promise<void>;
    info: (message: string, context?: LogContext) => Promise<void>;
    warning: (message: string, context?: LogContext) => Promise<void>;
    error: (message: string, context?: LogContext) => Promise<void>;
    deprecated: (version: string, message: string) => void;
};
export declare type ShopifyLogger = ReturnType<typeof logger>;
//# sourceMappingURL=index.d.ts.map