/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Returns true if the sequence is empty.
 */
export default function isEmpty(sequence) {
    // noinspection PointlessBooleanExpressionJS
    return !sequence
        || sequence[Symbol.iterator]().next().done === true;
}
//# sourceMappingURL=isEmpty.js.map