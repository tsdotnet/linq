import { IterableFilter } from '../IterableTransform.js';
export default function onError<T>(handler: (ex: any, index: number) => void): IterableFilter<T>;
