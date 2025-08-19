import { ArgumentNullException } from '@tsdotnet/exceptions';

function unfold(seed, valueFactory, skipSeed = false) {
    if (!valueFactory)
        throw new ArgumentNullException('valueFactory');
    return {
        *[Symbol.iterator]() {
            if (!skipSeed)
                yield seed;
            let value = seed, i = skipSeed ? 0 : 1;
            while (true) {
                value = valueFactory(value, i++);
                yield value;
            }
        }
    };
}

export { unfold as default };
//# sourceMappingURL=unfold.js.map
