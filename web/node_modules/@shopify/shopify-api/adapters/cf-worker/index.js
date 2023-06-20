"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runtime_1 = require("../../runtime");
const adapter_1 = require("./adapter");
(0, runtime_1.setAbstractFetchFunc)(adapter_1.workerFetch);
(0, runtime_1.setAbstractConvertRequestFunc)(adapter_1.workerConvertRequest);
(0, runtime_1.setAbstractConvertResponseFunc)(adapter_1.workerConvertResponse);
(0, runtime_1.setAbstractConvertHeadersFunc)(adapter_1.workerConvertHeaders);
(0, runtime_1.setAbstractRuntimeString)(adapter_1.workerRuntimeString);
(0, runtime_1.setCrypto)(crypto);
//# sourceMappingURL=index.js.map