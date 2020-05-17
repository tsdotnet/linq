/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {IterableValueTransform} from '../IterableTransform';
import where from './where';

/**
 * An iterable filter that only returns numbers.
 * @param {NumberConstructor} type
 * @return {IterableValueTransform<any, number>}
 */
export default function ofType (type: NumberConstructor): IterableValueTransform<any, number>;

/**
 * An iterable filter that only returns strings.
 * @param {StringConstructor} type
 * @return {IterableValueTransform<any, string>}
 */
export default function ofType (type: StringConstructor): IterableValueTransform<any, string>;

/**
 * An iterable filter that only returns booleans.
 * @param {BooleanConstructor} type
 * @return {IterableValueTransform<any, boolean>}
 */
export default function ofType (type: BooleanConstructor): IterableValueTransform<any, boolean>;

/**
 * An iterable filter that only returns functions.
 * @param {FunctionConstructor} type
 * @return {IterableValueTransform<any, Function>}
 */
export default function ofType (type: FunctionConstructor): IterableValueTransform<any, Function>;

/**
 * An iterable filter that only returns elements of the type (constructor) provided.
 * Example: Calling ofType(Number)(sequence) will filter all numbers.
 * @param {{new(...params: any[]): TType}} type
 * @return {IterableValueTransform<any, TType>}
 */
export default function ofType<TType extends object> (type: { new (...params: any[]): TType }): IterableValueTransform<any, TType>;

/**
 * An iterable filter that only returns elements of the type (constructor) provided.
 * Example: Calling ofType(Number)(sequence) will filter all numbers.
 * @param type
 * @return {IterableValueTransform<any, TType>}
 */
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
			return where(e => e instanceof type);
	}
	return where(e => typeof e===typeName);
}
