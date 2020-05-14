import { IterableValueTransform } from '../IterableTransform';
/**
 * An iterable filter that only returns elements of the type (constructor) provided.
 * Example: Calling ofType(Number)(sequence) will filter all numbers.
 * @param {{new(...params: any[]): TType}} type
 * @return {IterableValueTransform<any, TType>}
 */
declare function ofType<TType>(type: {
    new (...params: any[]): TType;
}): IterableValueTransform<any, TType>;
export default ofType;
