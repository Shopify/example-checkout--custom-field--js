import { LocalStorage } from '@shopify/cli-kit/node/local-storage';
export declare function isAutocorrectEnabled(conf?: LocalStorage<ConfigSchema>): boolean;
export declare function setAutocorrect(value: boolean, conf?: LocalStorage<ConfigSchema>): void;
export interface ConfigSchema {
    autocorrectEnabled: boolean;
}
