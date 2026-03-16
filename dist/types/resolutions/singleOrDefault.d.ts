import { IterableTransform } from '../IterableTransform.js';
export default function singleOrDefault<T>(): IterableTransform<T, T | undefined>;
export default function singleOrDefault<T, TDefault>(defaultValue: TDefault): IterableTransform<T, T | TDefault>;
