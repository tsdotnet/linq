/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { IterableTransform } from '../IterableTransform';
export default function aggregate<T>(reduction: (previous: T | undefined, current: T, index: number) => T): IterableTransform<T, T | undefined>;
export default function aggregate<T, U>(reduction: (previous: U, current: T, index: number) => U, initialValue: U): IterableTransform<T, U>;
