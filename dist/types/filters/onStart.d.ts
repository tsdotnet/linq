import { IterableFilter } from '../IterableTransform.js';
export default function onStart<T>(action: () => void): IterableFilter<T>;
