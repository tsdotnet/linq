import { IterableTransform } from '../IterableTransform.js';
export default function lastOrDefault<T>(): IterableTransform<T, T | undefined>;
export default function lastOrDefault<T, TDefault>(defaultValue: TDefault): IterableTransform<T, T | TDefault>;
