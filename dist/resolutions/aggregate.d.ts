/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { IterableTransform } from '../IterableTransform';
declare function aggregate<T>(reduction: (previous: T | undefined, current: T, index: number) => T): IterableTransform<T, T | undefined>;
declare function aggregate<T, U>(reduction: (previous: U, current: T, index: number) => U, initialValue: U): IterableTransform<T, U>;
export default aggregate;
