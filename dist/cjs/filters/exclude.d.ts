import { IterableFilter } from '../IterableTransform.js';
export default function exclude<T>(exclusions: Iterable<T>): IterableFilter<T>;
