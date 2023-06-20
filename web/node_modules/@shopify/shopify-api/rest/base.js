"use strict";
var _Base_session;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const tslib_1 = require("tslib");
const error_1 = require("../lib/error");
const types_1 = require("../lib/clients/http_client/types");
class Base {
    constructor({ session, fromData }) {
        _Base_session.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _Base_session, session, "f");
        if (fromData) {
            this.setData(fromData);
        }
    }
    static setClassProperties({ Client, config }) {
        this.Client = Client;
        this.config = config;
    }
    static baseFind({ session, urlIds, params, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: 'get',
                operation: 'get',
                session,
                urlIds,
                params,
            });
            return {
                data: this.createInstancesFromResponse(session, response.body),
                headers: response.headers,
                pageInfo: response.pageInfo,
            };
        });
    }
    static request({ session, http_method, operation, urlIds, params, body, entity, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const client = new this.Client({
                session,
                apiVersion: this.apiVersion,
            });
            const path = this.getPath({ http_method, operation, urlIds, entity });
            const cleanParams = {};
            if (params) {
                for (const key in params) {
                    if (params[key] !== null) {
                        cleanParams[key] = params[key];
                    }
                }
            }
            switch (http_method) {
                case 'get':
                    return client.get({ path, query: cleanParams });
                case 'post':
                    return client.post({
                        path,
                        query: cleanParams,
                        data: body,
                        type: types_1.DataType.JSON,
                    });
                case 'put':
                    return client.put({
                        path,
                        query: cleanParams,
                        data: body,
                        type: types_1.DataType.JSON,
                    });
                case 'delete':
                    return client.delete({ path, query: cleanParams });
                default:
                    throw new Error(`Unrecognized HTTP method "${http_method}"`);
            }
        });
    }
    static getJsonBodyName() {
        return this.name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    }
    static getPath({ http_method, operation, urlIds, entity, }) {
        let match = null;
        let specificity = -1;
        this.paths.forEach((path) => {
            if (http_method !== path.http_method ||
                operation !== path.operation ||
                path.ids.length <= specificity) {
                return;
            }
            let pathUrlIds = Object.assign({}, urlIds);
            path.ids.forEach((id) => {
                if (!pathUrlIds[id] && entity && entity[id]) {
                    pathUrlIds[id] = entity[id];
                }
            });
            pathUrlIds = Object.entries(pathUrlIds).reduce((acc, [key, value]) => {
                if (value) {
                    acc[key] = value;
                }
                return acc;
            }, {});
            // If we weren't given all of the path's required ids, we can't use it
            const diff = path.ids.reduce((acc, id) => (pathUrlIds[id] ? acc : acc.concat(id)), []);
            if (diff.length > 0) {
                return;
            }
            specificity = path.ids.length;
            match = path.path.replace(/(<([^>]+)>)/g, (_m1, _m2, id) => `${pathUrlIds[id]}`);
        });
        if (!match) {
            throw new error_1.RestResourceError('Could not find a path for request');
        }
        if (this.customPrefix) {
            return `${this.customPrefix}/${match}`;
        }
        else {
            return match;
        }
    }
    static createInstancesFromResponse(session, data) {
        if (data[this.pluralName] || Array.isArray(data[this.resourceName])) {
            return (data[this.pluralName] || data[this.resourceName]).reduce((acc, entry) => acc.concat(this.createInstance(session, entry)), []);
        }
        if (data[this.resourceName]) {
            return [this.createInstance(session, data[this.resourceName])];
        }
        return [];
    }
    static createInstance(session, data, prevInstance) {
        const instance = prevInstance
            ? prevInstance
            : new this({ session });
        if (data) {
            instance.setData(data);
        }
        return instance;
    }
    get session() {
        return tslib_1.__classPrivateFieldGet(this, _Base_session, "f");
    }
    save({ update = false } = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { primaryKey, resourceName } = this.resource();
            const method = this[primaryKey] ? 'put' : 'post';
            const data = this.serialize(true);
            const response = yield this.resource().request({
                http_method: method,
                operation: method,
                session: this.session,
                urlIds: {},
                body: { [this.resource().getJsonBodyName()]: data },
                entity: this,
            });
            const body = response.body[resourceName];
            if (update && body) {
                this.setData(body);
            }
        });
    }
    saveAndUpdate() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.save({ update: true });
        });
    }
    delete() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.resource().request({
                http_method: 'delete',
                operation: 'delete',
                session: this.session,
                urlIds: {},
                entity: this,
            });
        });
    }
    serialize(saving = false) {
        const { hasMany, hasOne, readOnlyAttributes } = this.resource();
        return Object.entries(this).reduce((acc, [attribute, value]) => {
            if (['#session'].includes(attribute) ||
                (saving && readOnlyAttributes.includes(attribute))) {
                return acc;
            }
            if (attribute in hasMany && value) {
                acc[attribute] = value.reduce((attrAcc, entry) => {
                    return attrAcc.concat(this.serializeSubAttribute(entry, saving));
                }, []);
            }
            else if (attribute in hasOne && value) {
                acc[attribute] = this.serializeSubAttribute(value, saving);
            }
            else {
                acc[attribute] = value;
            }
            return acc;
        }, {});
    }
    toJSON() {
        return this.serialize();
    }
    request(args) {
        return this.resource().request(args);
    }
    setData(data) {
        const { hasMany, hasOne } = this.resource();
        Object.entries(data).forEach(([attribute, val]) => {
            if (attribute in hasMany) {
                const HasManyResource = hasMany[attribute];
                this[attribute] = [];
                val.forEach((entry) => {
                    this[attribute].push(new HasManyResource({ session: this.session, fromData: entry }));
                });
            }
            else if (attribute in hasOne) {
                const HasOneResource = hasOne[attribute];
                this[attribute] = new HasOneResource({
                    session: this.session,
                    fromData: val,
                });
            }
            else {
                this[attribute] = val;
            }
        });
    }
    resource() {
        return this.constructor;
    }
    serializeSubAttribute(attribute, saving) {
        return attribute.serialize
            ? attribute.serialize(saving)
            : this.resource()
                .createInstance(this.session, attribute)
                .serialize(saving);
    }
}
exports.Base = Base;
_Base_session = new WeakMap();
Base.resourceName = '';
Base.pluralName = '';
Base.primaryKey = 'id';
Base.customPrefix = null;
Base.readOnlyAttributes = [];
Base.hasOne = {};
Base.hasMany = {};
Base.paths = [];
//# sourceMappingURL=base.js.map