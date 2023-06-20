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
exports.Killer = void 0;
const child_process_1 = require("child_process");
const os_1 = require("os");
const pidFromPort = require("pid-from-port");
class Killer {
    constructor(ports) {
        this.ports = ports;
    }
    kill(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const killFunc = os_1.platform() === 'win32' ? this.win32Kill : this.unixKill;
            const promises = this.ports.map((port) => killFunc(port, options.signal));
            return Promise.all(promises);
        });
    }
    win32Kill(port, signal) {
        return __awaiter(this, void 0, void 0, function* () {
            const pid = yield pidFromPort(port).catch((error) => console.error('Failed to get pid of port', port, error));
            if (!pid) {
                return;
            }
            return new Promise((resolve, reject) => {
                const taskkill = child_process_1.spawn('TASKKILL', ['/f', '/t', '/pid', pid.toString()]);
                taskkill.stdout.on('data', (data) => console.log(data.toString()));
                taskkill.stderr.on('data', (data) => console.error(data.toString()));
                taskkill.on('close', (code, signal) => {
                    if (code !== 0) {
                        return reject(`taskkill process exited with code ${code} and signal ${signal}`);
                    }
                    resolve(undefined);
                });
                taskkill.on('error', (err) => reject(err));
            });
        });
    }
    unixKill(port, signal) {
        return __awaiter(this, void 0, void 0, function* () {
            const killCommand = {
                SIGKILL: '-9',
                SIGTERM: '-15'
            }[signal];
            return new Promise((resolve, reject) => {
                const lsof = child_process_1.spawn('lsof', ['-i', `tcp:${port}`]);
                const grep = child_process_1.spawn('grep', ['LISTEN']);
                const awk = child_process_1.spawn('awk', ['{print $2}']);
                const xargs = child_process_1.spawn('xargs', ['kill', killCommand]);
                lsof.stdout.pipe(grep.stdin);
                lsof.stderr.on('data', logStderrData('lsof'));
                grep.stdout.pipe(awk.stdin);
                grep.stderr.on('data', logStderrData('grep'));
                awk.stdout.pipe(xargs.stdin);
                awk.stderr.on('data', logStderrData('awk'));
                xargs.stdout.pipe(process.stdin);
                xargs.stderr.on('data', logStderrData('xargs'));
                xargs.on('close', (code) => {
                    if (code !== 0) {
                        return reject();
                    }
                    resolve(undefined);
                });
                function logStderrData(command) {
                    return (data) => console.error(`${command} - ${data.toString()}`);
                }
            });
        });
    }
}
exports.Killer = Killer;
//# sourceMappingURL=killer.js.map