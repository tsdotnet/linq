/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import identity from '../identity';
/**
 * Returns a map of all elements .
 * @param {SelectorWithIndex<T, TKey>} keySelector
 * @param valueSelector
 * @param {MappingMode} mappingBehavior
 * @return {IterableTransform<T, Map<TKey, TValue>>}
 */
export default function toMap(keySelector, valueSelector = identity, mappingBehavior = -1 /* Throw */) {
    if (!keySelector)
        throw new ArgumentNullException('keySelector');
    if (typeof valueSelector == 'number') {
        mappingBehavior = valueSelector;
        valueSelector = undefined;
    }
    if (!valueSelector)
        valueSelector = identity; // in case the user uses null as a default.
    return function (sequence) {
        const result = new Map();
        let i = 0;
        for (const e of sequence) {
            const key = keySelector(e, i++);
            if (result.has(key))
                switch (mappingBehavior) {
                    case 0 /* Keep */:
                        continue;
                    case -1 /* Throw */:
                        throw new Error('MappingMode.Throw: more than one of the same key encountered.');
                }
            result.set(key, valueSelector(e, i - 1));
        }
        return result;
    };
}
//# sourceMappingURL=toMap.js.map