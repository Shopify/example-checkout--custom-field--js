"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHost = void 0;
function decodeHost(host) {
    // eslint-disable-next-line no-warning-comments
    // TODO Remove the Buffer.from call when dropping Node 14 support
    return typeof atob === 'undefined'
        ? Buffer.from(host, 'base64').toString()
        : atob(host);
}
exports.decodeHost = decodeHost;
//# sourceMappingURL=decode-host.js.map