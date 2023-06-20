"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.killPortProcess = void 0;
const helpers_1 = require("./helpers");
const killer_1 = require("./killer");
function killPortProcess(inputPorts, inputOptions = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (helpers_1.isNullOrUndefined(inputPorts)) {
            throw new Error('No ports found in input');
        }
        const options = helpers_1.mergeOptions(inputOptions);
        const toNumber = (value) => Number(value);
        const ports = helpers_1.arrayifyInput(inputPorts).map(toNumber);
        const killer = new killer_1.Killer(ports);
        yield killer.kill({
            signal: options.signal
        });
    });
}
exports.killPortProcess = killPortProcess;
//# sourceMappingURL=index.js.map