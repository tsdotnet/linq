/**
 * @packageDocumentation
 * @module resolutions
 */
/**
 * Returns the sum (.value) of a sequence and the number of entries (.count).
 * @param {Iterable<number>} sequence The sequence of numbers to sum and count.
 * @return {{value: number; count: number}} The result.
 */
export default function sumAndCount(sequence: Iterable<number>): {
    value: number;
    count: number;
};
