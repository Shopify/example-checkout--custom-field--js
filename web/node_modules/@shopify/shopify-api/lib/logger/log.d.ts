import { LogSeverity } from '../types';
import { ConfigInterface } from '../base-types';
export declare type LoggerFunction = (severity: LogSeverity, message: string, context?: {
    [key: string]: any;
}) => void;
export declare function log(config: ConfigInterface): LoggerFunction;
//# sourceMappingURL=log.d.ts.map