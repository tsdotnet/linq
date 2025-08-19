function singleOrDefault(defaultValue) {
    return function (sequence) {
        if (!sequence)
            return defaultValue;
        if (sequence instanceof Array) {
            switch (sequence.length) {
                case 0: return defaultValue;
                case 1: return sequence[0];
            }
        }
        else {
            const iterator = sequence[Symbol.iterator]();
            const first = iterator.next();
            if (first.done)
                return defaultValue;
            if (iterator.next().done)
                return first.value;
        }
        throw new Error('Sequence contains more than one element.');
    };
}

export { singleOrDefault as default };
//# sourceMappingURL=singleOrDefault.js.map
