import { Config } from '@oclif/core';
export interface GenerateOptions {
    directory: string;
    reset: boolean;
    config: Config;
    apiKey?: string;
    type?: string;
    template?: string;
    name?: string;
    cloneUrl?: string;
}
declare function generate(options: GenerateOptions): Promise<void>;
export default generate;
