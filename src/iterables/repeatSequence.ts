/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Generates a sequence that contains each value in the provided sequence.
 */
export default function* repeatSequence<T> (
	sequence: Iterable<T>,
	count: number = Infinity): Iterable<T> {
	if(sequence)
	{
		for(let i = 0; i<count; i++)
		{
			for(const e of sequence)
			{
				yield e;
			}
		}
	}
}
