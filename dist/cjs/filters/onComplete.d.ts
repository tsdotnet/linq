import { IterableFilter } from '../IterableTransform.js';
export default function onComplete<T>(action: () => void): IterableFilter<T>;
