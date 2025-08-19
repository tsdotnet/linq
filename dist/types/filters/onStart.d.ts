import { IterableFilter } from '../IterableTransform';
export default function onStart<T>(action: () => void): IterableFilter<T>;
