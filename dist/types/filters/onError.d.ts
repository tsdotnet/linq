import { IterableFilter } from '../IterableTransform';
export default function onError<T>(handler: (ex: any, index: number) => void): IterableFilter<T>;
