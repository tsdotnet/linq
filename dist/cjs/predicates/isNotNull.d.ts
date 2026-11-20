type NotNull<T> = T extends null ? never : T;
export default function isNotNull<T = any>(e: T): e is NotNull<T>;
export {};
