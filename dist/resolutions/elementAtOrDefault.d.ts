import { IterableTransform } from '../IterableTransform';
export default function elementAtOrDefault<T>(index: number, defaultValue?: T): IterableTransform<T, T | undefined>;
