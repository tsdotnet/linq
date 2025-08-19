import { IterableTransform } from '../IterableTransform';
export default function aggregate<T>(reducer: (previous: T, current: T, index: number) => T): IterableTransform<T, T>;
export default function aggregate<T, U>(reducer: (previous: U, current: T, index: number) => U, initialValue: U): IterableTransform<T, U>;
