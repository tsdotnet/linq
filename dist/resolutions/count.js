"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-unused-vars */
const aggregate_1 = tslib_1.__importDefault(require("./aggregate"));
const a = aggregate_1.default((p, c) => p + 1, 0);
/**
 * Returns true if sequence is not empty.
 */
function count(sequence) {
    return sequence ? a(sequence) : 0;
}
exports.default = count;
//# sourceMappingURL=count.js.map