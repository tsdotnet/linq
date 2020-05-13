"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
function ofType(type) {
    let typeName;
    switch (type) {
        case Number:
            typeName = 'number';
            break;
        case String:
            typeName = 'string';
            break;
        case Boolean:
            typeName = 'boolean';
            break;
        case Function:
            typeName = 'function';
            break;
        default:
            return function* (sequence) {
                for (const e of sequence) {
                    if (e instanceof type)
                        yield e;
                }
            };
    }
    return function* (sequence) {
        for (const e of sequence) {
            if (typeof e === typeName)
                yield e;
        }
    };
}
exports.default = ofType;
//# sourceMappingURL=ofType.js.map