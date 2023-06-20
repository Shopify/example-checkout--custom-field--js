"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEnvironments = exports.shutdownEnvironments = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
function shutdownEnvironments(environments) {
    for (const env of environments) {
        if (typeof env.process.pid !== 'undefined') {
            process.kill(-env.process.pid);
        }
    }
}
exports.shutdownEnvironments = shutdownEnvironments;
function serverReady(domain) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, node_fetch_1.default)(domain);
            return response.status === 200;
        }
        catch (err) {
            return false;
        }
    });
}
function allEnvironmentsReady(environments) {
    return environments.map((env) => env.ready).every((ready) => ready);
}
function runEnvironments(environments) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const maxAttempts = 5;
        if (allEnvironmentsReady(environments))
            return true;
        for (const env of environments) {
            let attempts = 0;
            let ready = false;
            while (!ready && attempts < maxAttempts) {
                attempts++;
                yield sleep(100);
                ready = yield serverReady(env.domain);
            }
            env.ready = ready;
        }
        return allEnvironmentsReady(environments);
    });
}
exports.runEnvironments = runEnvironments;
//# sourceMappingURL=test_environments.js.map