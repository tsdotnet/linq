/**
 * Generates a sequence that contains each value in the provided sequence and repeats.
 * @param {Iterable<T>} sequence The sequence to repeat.
 * @param {number} count The number of times to repeat the sequence.
 * @return {Iterable<T>}
 */
export default function repeatSequence<T>(sequence: Iterable<T>, count: number): Iterable<T>;
