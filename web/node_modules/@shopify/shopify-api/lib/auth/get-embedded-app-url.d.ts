import { ConfigInterface } from '../base-types';
import { GetEmbeddedAppUrlParams } from './types';
export declare function getEmbeddedAppUrl(config: ConfigInterface): ({ ...adapterArgs }: GetEmbeddedAppUrlParams) => Promise<string>;
export declare function buildEmbeddedAppUrl(config: ConfigInterface): (host: string) => string;
//# sourceMappingURL=get-embedded-app-url.d.ts.map