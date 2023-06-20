"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./index.js");
function toEnv() {
    return process.argv.slice(1).join(' ').includes('json2env');
}
let data = '';
process.stdin.on('readable', function () {
    const chunk = process.stdin.read();
    if (chunk)
        data += chunk.toString();
});
process.stdin.on('end', function () {
    const result = toEnv()
        ? index_js_1.stringify(JSON.parse(data))
        : JSON.stringify(index_js_1.parse(data));
    process.stdout.write(result);
});
