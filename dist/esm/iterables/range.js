function range(start = 0, maxInclusive = Infinity, step = 1) {
    return {
        *[Symbol.iterator]() {
            for (let i = start; i <= maxInclusive; i += step) {
                yield i;
            }
        }
    };
}

export { range as default };
//# sourceMappingURL=range.js.map
