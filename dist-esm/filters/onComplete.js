/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * An iterable filter that invokes the provided action if there are no more entries to iterate.
 */
export default function onComplete(action) {
    if (!action)
        throw new ArgumentNullException('action');
    return function* (sequence) {
        for (const e of sequence)
            yield e;
        action();
    };
}
//# sourceMappingURL=onComplete.js.map