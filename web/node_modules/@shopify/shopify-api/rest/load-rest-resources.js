"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRestResources = void 0;
const logger_1 = require("../lib/logger");
function loadRestResources({ resources, config, RestClient, }) {
    const firstResource = Object.keys(resources)[0];
    if (config.apiVersion !== resources[firstResource].apiVersion) {
        (0, logger_1.logger)(config).warning(`Loading REST resources for API version ${resources[firstResource].apiVersion}, which doesn't match the default ${config.apiVersion}`);
    }
    return Object.fromEntries(Object.entries(resources).map(([name, resource]) => {
        class NewResource extends resource {
        }
        NewResource.setClassProperties({
            Client: RestClient,
            config,
        });
        Object.entries(NewResource.hasOne).map(([_attribute, klass]) => {
            klass.setClassProperties({
                Client: RestClient,
                config,
            });
        });
        Object.entries(NewResource.hasMany).map(([_attribute, klass]) => {
            klass.setClassProperties({
                Client: RestClient,
                config,
            });
        });
        Reflect.defineProperty(NewResource, 'name', {
            value: name,
        });
        return [name, NewResource];
    }));
}
exports.loadRestResources = loadRestResources;
//# sourceMappingURL=load-rest-resources.js.map