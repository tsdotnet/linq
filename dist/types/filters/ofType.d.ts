import { IterableValueTransform } from '../IterableTransform';
export default function ofType(type: NumberConstructor): IterableValueTransform<any, number>;
export default function ofType(type: StringConstructor): IterableValueTransform<any, string>;
export default function ofType(type: BooleanConstructor): IterableValueTransform<any, boolean>;
export default function ofType(type: FunctionConstructor): IterableValueTransform<any, Function>;
export default function ofType<TType extends object>(type: {
    new (...params: any[]): TType;
}): IterableValueTransform<any, TType>;
