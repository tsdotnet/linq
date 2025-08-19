import { IterableFilter } from '../IterableTransform';
export default function exclude<T>(exclusions: Iterable<T>): IterableFilter<T>;
