#! /usr/bin/env node
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
const parse = require('get-them-args');
const index_1 = require("../lib/index");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const args = parse(process.argv.slice(2));
    if (!args) {
        console.error('No args provided');
        process.exit(1);
    }
    const ports = parsePortFromArgs(args);
    if (!ports) {
        console.error('No port(s) found in provided args');
        return process.exit(1);
    }
    const flags = parseFlagsFromArgs(args);
    const options = formatOptions(flags);
    yield index_1.killPortProcess(ports, options);
}))();
function parsePortFromArgs(args) {
    if (args.p) {
        return args.p;
    }
    if (args.port) {
        return args.port;
    }
    return args.unknown;
}
function parseFlagsFromArgs(args) {
    const flags = {};
    if (args.graceful) {
        flags.graceful = true;
    }
    return flags;
}
function formatOptions(flags) {
    const { graceful } = flags;
    const options = {};
    if (graceful) {
        options.signal = 'SIGTERM';
    }
    return options;
}
//# sourceMappingURL=kill-port-process.js.map