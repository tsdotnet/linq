import aggregate from './aggregate.js';

const a = aggregate((p) => p + 1, 0);
function count(sequence) {
    if (sequence instanceof Array)
        return sequence.length;
    return sequence ? a(sequence) : 0;
}

export { count as default };
//# sourceMappingURL=count.js.map
