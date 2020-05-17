/**
 * @packageDocumentation
 * @module filters
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import where from './where';
/**
 * An iterable filter that only returns elements of the type (constructor) provided.
 * Example: Calling ofType(Number)(sequence) will filter all numbers.
 * @param type
 * @return {IterableValueTransform<any, TType>}
 */
export default function ofType(type) {
    let typeName;
    switch (type) {
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
    return where(e => typeof e === typeName);
}
//# sourceMappingURL=ofType.js.map