"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const rollup_plugin_swc_1 = tslib_1.__importDefault(require("rollup-plugin-swc"));
const plugin_node_resolve_1 = tslib_1.__importDefault(require("@rollup/plugin-node-resolve"));
const plugin_commonjs_1 = tslib_1.__importDefault(require("@rollup/plugin-commonjs"));
/* eslint-disable-next-line import/no-anonymous-default-export */
exports.default = {
    input: 'adapters/__e2etests__/test_apps/test-cf-worker-app.js',
    output: {
        dir: 'bundle',
        format: 'esm',
    },
    plugins: [
        (0, plugin_node_resolve_1.default)({
            extensions: ['.ts', '.js'],
            browser: true,
        }),
        (0, plugin_commonjs_1.default)(),
        (0, rollup_plugin_swc_1.default)({
            jsc: {
                parser: {
                    syntax: 'typescript',
                },
                target: 'es2022',
            },
        }),
    ],
};
//# sourceMappingURL=rollup.test-cf-worker-app.config.js.map