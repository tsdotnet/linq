"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = contains;
const tslib_1 = require("tslib");
const indexOf_1 = tslib_1.__importDefault(require("./indexOf"));
function contains(entry) {
    return function (sequence) {
        return (0, indexOf_1.default)(entry)(sequence) !== -1;
    };
}
//# sourceMappingURL=contains.js.map