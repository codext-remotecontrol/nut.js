"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.busyWaitForNanoSeconds = exports.sleep = void 0;
const sleep = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
exports.sleep = sleep;
const busyWaitForNanoSeconds = (duration) => {
    return new Promise((res) => {
        const start = process.hrtime.bigint();
        let isWaiting = true;
        while (isWaiting) {
            if (process.hrtime.bigint() - start > duration) {
                isWaiting = false;
            }
        }
        res(true);
    });
};
exports.busyWaitForNanoSeconds = busyWaitForNanoSeconds;
//# sourceMappingURL=sleep.function.js.map