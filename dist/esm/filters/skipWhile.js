function skipWhile(predicate) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0, skipped = false;
                for (const e of sequence) {
                    if (skipped || !predicate(e, i)) {
                        skipped = true;
                        yield e;
                    }
                    i++;
                }
            }
        };
    };
}

export { skipWhile as default };
//# sourceMappingURL=skipWhile.js.map
