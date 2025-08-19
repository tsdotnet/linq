"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ofType;
const tslib_1 = require("tslib");
const where_1 = tslib_1.__importDefault(require("./where"));
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
            return (0, where_1.default)(e => e instanceof type);
    }
    return (0, where_1.default)(e => typeof e === typeName);
}
//# sourceMappingURL=ofType.js.map