"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTestRequests = void 0;
exports.mockTestRequests = {
    requestList: [],
    responseList: [],
    queueResponse(response) {
        this.responseList.push(response);
    },
    queueError(error) {
        this.responseList.push(error);
    },
    getRequest() {
        return this.requestList.shift();
    },
    getResponses() {
        return this.responseList;
    },
    reset() {
        this.requestList = [];
        this.responseList = [];
    },
};
//# sourceMappingURL=mock_test_requests.js.map