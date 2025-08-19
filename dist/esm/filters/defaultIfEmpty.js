function defaultIfEmpty(defaultValue) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let hasElements = false;
                for (const e of sequence) {
                    hasElements = true;
                    yield e;
                }
                if (!hasElements)
                    yield defaultValue;
            }
        };
    };
}

export { defaultIfEmpty as default };
//# sourceMappingURL=defaultIfEmpty.js.map
