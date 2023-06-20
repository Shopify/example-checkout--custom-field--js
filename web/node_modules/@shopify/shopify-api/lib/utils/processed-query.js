"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessedQuery {
    constructor() {
        this.processedQuery = new URLSearchParams();
    }
    static stringify(keyValuePairs) {
        if (!keyValuePairs || Object.keys(keyValuePairs).length === 0)
            return '';
        return new ProcessedQuery().putAll(keyValuePairs).stringify();
    }
    putAll(keyValuePairs) {
        Object.entries(keyValuePairs).forEach(([key, value]) => this.put(key, value));
        return this;
    }
    put(key, value) {
        if (Array.isArray(value)) {
            this.putArray(key, value);
        }
        else if ((value === null || value === void 0 ? void 0 : value.constructor) === Object) {
            this.putObject(key, value);
        }
        else {
            this.putSimple(key, value);
        }
    }
    putArray(key, value) {
        value.forEach((arrayValue) => this.processedQuery.append(`${key}[]`, `${arrayValue}`));
    }
    putObject(key, value) {
        Object.entries(value).forEach(([entry, entryValue]) => {
            this.processedQuery.append(`${key}[${entry}]`, `${entryValue}`);
        });
    }
    putSimple(key, value) {
        this.processedQuery.append(key, `${value}`);
    }
    stringify(omitQuestionMark = false) {
        const queryString = this.processedQuery.toString();
        return omitQuestionMark ? queryString : `?${queryString}`;
    }
}
exports.default = ProcessedQuery;
//# sourceMappingURL=processed-query.js.map