function takeWhile(predicate) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0;
                for (const e of sequence) {
                    if (!predicate(e, i++))
                        break;
                    yield e;
                }
            }
        };
    };
}

export { takeWhile as default };
//# sourceMappingURL=takeWhile.js.map
