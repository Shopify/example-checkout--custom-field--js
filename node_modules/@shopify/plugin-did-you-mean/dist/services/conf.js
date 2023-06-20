import { LocalStorage } from '@shopify/cli-kit/node/local-storage';
export function isAutocorrectEnabled(conf = getConfig()) {
    return conf.get('autocorrectEnabled');
}
export function setAutocorrect(value, conf = getConfig()) {
    conf.set('autocorrectEnabled', value);
}
function getConfig() {
    if (!configInstance) {
        configInstance = new LocalStorage({ projectName: 'did-you-mean' });
    }
    return configInstance;
}
let configInstance;
//# sourceMappingURL=conf.js.map