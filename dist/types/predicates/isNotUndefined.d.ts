type NotUndefined<T> = T extends undefined ? never : T;
export default function isNotUndefined<T = any>(e: T): e is NotUndefined<T>;
export {};
