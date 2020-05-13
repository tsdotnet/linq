"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const aggregate_1 = tslib_1.__importDefault(require("./aggregate"));
const a = aggregate_1.default((p, c) => c);
/**
 * Returns the last element of a sequence, or a the default value if no element is found.
 */
function lastOrDefault(sequence, defaultValue) {
    if (!sequence)
        return undefined;
    return defaultValue === undefined
        ? a(sequence)
        : aggregate_1.default((p, c) => c, defaultValue)(sequence);
}
exports.default = lastOrDefault;
//# sourceMappingURL=lastOrDefault.js.map