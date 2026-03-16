import { IterableTransform } from '../IterableTransform.js';
export default function firstOrDefault<T>(): IterableTransform<T, T | undefined>;
export default function firstOrDefault<T, TDefault>(defaultValue: TDefault): IterableTransform<T, T | TDefault>;
