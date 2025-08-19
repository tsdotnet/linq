function where(predicate) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0;
                for (const e of sequence) {
                    if (predicate(e, i++))
                        yield e;
                }
            }
        };
    };
}

export { where as default };
//# sourceMappingURL=where.js.map
