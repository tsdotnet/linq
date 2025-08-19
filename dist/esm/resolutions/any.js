import isEmpty from './isEmpty.js';

function any(predicate) {
    return function (sequence) {
        if (!sequence)
            return false;
        if (!predicate) {
            return !isEmpty(sequence);
        }
        if (sequence instanceof Array)
            return sequence.some(predicate);
        let i = 0;
        for (const e of sequence) {
            if (predicate(e, i++))
                return true;
        }
        return false;
    };
}

export { any as default };
//# sourceMappingURL=any.js.map
