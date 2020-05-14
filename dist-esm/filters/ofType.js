/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * An iterable filter that only returns elements of the type (constructor) provided.
 * Example: Calling ofType(Number)(sequence) will filter all numbers.
 * @param type
 * @return {IterableValueTransform<any, TType>}
 */
function ofType(type) {
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
            return function* (sequence) {
                for (const e of sequence) {
                    if (e instanceof type)
                        yield e;
                }
            };
    }
    return function* (sequence) {
        for (const e of sequence) {
            if (typeof e === typeName)
                yield e;
        }
    };
}
export default ofType;
//# sourceMappingURL=ofType.js.map