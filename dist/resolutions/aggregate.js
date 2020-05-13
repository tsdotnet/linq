"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
function aggregate(reduction, initialValue) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException_1.default('sequence');
        let previous = initialValue, i = 0;
        for (const current of sequence)
            previous = reduction(previous, current, i++);
        return previous;
    };
}
exports.default = aggregate;
//# sourceMappingURL=aggregate.js.map