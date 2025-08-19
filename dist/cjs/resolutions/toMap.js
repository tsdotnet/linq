"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = toMap;
const tslib_1 = require("tslib");
const exceptions_1 = require("@tsdotnet/exceptions");
const identity_1 = tslib_1.__importDefault(require("../identity"));
function toMap(keySelector, valueSelector = identity_1.default, mappingBehavior = -1) {
    if (!keySelector)
        throw new exceptions_1.ArgumentNullException('keySelector');
    if (typeof valueSelector == 'number') {
        mappingBehavior = valueSelector;
        valueSelector = undefined;
    }
    if (!valueSelector)
        valueSelector = identity_1.default;
    return function (sequence) {
        const result = new Map();
        let i = 0;
        for (const e of sequence) {
            const key = keySelector(e, i++);
            if (result.has(key))
                switch (mappingBehavior) {
                    case 0:
                        continue;
                    case -1:
                        throw new Error('MappingMode.Throw: more than one of the same key encountered.');
                }
            result.set(key, valueSelector(e, i - 1));
        }
        return result;
    };
}
//# sourceMappingURL=toMap.js.map