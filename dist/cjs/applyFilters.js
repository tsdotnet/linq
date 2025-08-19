"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = applyFilters;
function applyFilters(sequence, filters) {
    for (const filter of filters) {
        sequence = filter(sequence);
    }
    return sequence;
}
//# sourceMappingURL=applyFilters.js.map