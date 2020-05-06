/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableValueTransform} from '../IterableTransform';

/**
 * An iterable filter that only returns elements of the type (constructor) provided.
 * Example: Calling ofType(Number)(sequence) will filter all numbers.
 */
export default function ofType<TType> (type: { new (...params: any[]): TType }): IterableValueTransform<any, TType>;
export default function ofType<TType> (type: any): IterableValueTransform<any, TType> {
	let typeName: string;
	switch(type)
	{
		case Number:
			typeName = 'number';
			break;
		case String:
			typeName = 'string';
			break;
		case Boolean:
			typeName = 'boolean';
			break;
		case Function:
			typeName = 'function';
			break;
		default:
			return function* (sequence: Iterable<any>): Iterable<TType> {
				for(const e of sequence)
				{
					if(e instanceof type) yield e;
				}
			};
	}
	return function* (sequence: Iterable<any>): Iterable<TType> {
		for(const e of sequence)
		{
			if(typeof e===typeName) yield e;
		}
	};
}
