import { IterableFilter } from '../IterableTransform';
export default function onComplete<T>(action: () => void): IterableFilter<T>;
