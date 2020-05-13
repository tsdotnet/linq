/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import comparePrimitives from '@tsdotnet/compare/dist/comparePrimitives';
import toArray from '../resolutions/toArray';
export default function orderBy(keySelector, order = 1 /* Ascending */) {
    return function* (sequence) {
        for (const e of toArray(sequence).sort((a, b) => comparePrimitives(keySelector(a), keySelector(b)) * order)) {
            yield e;
        }
    };
}
//# sourceMappingURL=orderBy.js.map