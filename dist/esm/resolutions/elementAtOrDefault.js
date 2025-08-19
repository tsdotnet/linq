import integer from '@tsdotnet/integer';

function elementAtOrDefault(index, defaultValue) {
    integer.assertZeroOrGreater(index);
    return function (sequence) {
        if (!sequence)
            return defaultValue;
        if (sequence instanceof Array)
            return index < sequence.length ? sequence[index] : defaultValue;
        let count = 0;
        for (const e of sequence) {
            if (index === count++)
                return e;
        }
        return defaultValue;
    };
}

export { elementAtOrDefault as default };
//# sourceMappingURL=elementAtOrDefault.js.map
