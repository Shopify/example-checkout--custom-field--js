"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopifySession = void 0;
const decode_session_token_1 = require("./decode-session-token");
const session_utils_1 = require("./session-utils");
function shopifySession(config) {
    return {
        customAppSession: (0, session_utils_1.customAppSession)(config),
        getCurrentId: (0, session_utils_1.getCurrentSessionId)(config),
        getOfflineId: (0, session_utils_1.getOfflineId)(config),
        decodeSessionToken: (0, decode_session_token_1.decodeSessionToken)(config),
    };
}
exports.shopifySession = shopifySession;
//# sourceMappingURL=index.js.map