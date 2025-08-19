import { IterableTransform } from '../IterableTransform';
export default function lastOrDefault<T>(): IterableTransform<T, T | undefined>;
export default function lastOrDefault<T, TDefault>(defaultValue: TDefault): IterableTransform<T, T | TDefault>;
