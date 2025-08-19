import { IterableFilter } from './IterableTransform';
export default function applyFilters<T>(sequence: Iterable<T>, filters: Iterable<IterableFilter<T>>): Iterable<T>;
