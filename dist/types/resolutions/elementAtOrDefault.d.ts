import { IterableTransform } from '../IterableTransform';
export default function elementAtOrDefault<T>(index: number): IterableTransform<T, T | undefined>;
export default function elementAtOrDefault<T, TDefault>(index: number, defaultValue: T): IterableTransform<T, T | TDefault>;
