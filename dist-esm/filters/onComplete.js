/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * An iterable filter that invokes the provided action if there are no more entries to iterate.
 * @param {() => void} action
 * @return {IterableFilter<T>}
 */
export default function onComplete(action) {
    if (!action)
        throw new ArgumentNullException('action');
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of sequence)
                    yield e;
                action();
            }
        };
    };
}
//# sourceMappingURL=onComplete.js.map