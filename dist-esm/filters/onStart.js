/**
 * @packageDocumentation
 * @module filters
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * An iterable filter that invokes the provided action before iterating results.
 * @param {() => void} action
 * @return {IterableFilter<T>}
 */
export default function onStart(action) {
    if (!action)
        throw new ArgumentNullException('action');
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                action();
                for (const e of sequence)
                    yield e;
            }
        };
    };
}
//# sourceMappingURL=onStart.js.map