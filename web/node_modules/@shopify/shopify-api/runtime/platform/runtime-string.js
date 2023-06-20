"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAbstractRuntimeString = exports.abstractRuntimeString = void 0;
// eslint-disable-next-line import/no-mutable-exports
let abstractRuntimeString = () => {
    throw new Error("Missing adapter implementation for 'abstractRuntimeString' - make sure to import the appropriate adapter for your platform");
};
exports.abstractRuntimeString = abstractRuntimeString;
function setAbstractRuntimeString(func) {
    exports.abstractRuntimeString = func;
}
exports.setAbstractRuntimeString = setAbstractRuntimeString;
//# sourceMappingURL=runtime-string.js.map