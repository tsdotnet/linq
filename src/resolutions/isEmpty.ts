/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
/**
 * Returns true if the sequence is empty.
 * @param {Iterable<any>} sequence
 * @return {boolean}
 */
export default function isEmpty (sequence: Iterable<any>): boolean {
	// noinspection PointlessBooleanExpressionJS
	return !sequence
		|| sequence instanceof Array && (sequence.length === 0)
		|| sequence[Symbol.iterator]().next().done===true;
}
