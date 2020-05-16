/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Returns true if the sequence is empty.
 * @param {Iterable<any>} sequence
 * @return {boolean}
 */
export default function isEmpty(sequence) {
    // noinspection PointlessBooleanExpressionJS
    return !sequence
        || sequence instanceof Array && !sequence.length
        || sequence[Symbol.iterator]().next().done === true;
}
//# sourceMappingURL=isEmpty.js.map