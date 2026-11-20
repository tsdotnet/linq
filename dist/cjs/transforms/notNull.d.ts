export type NotNull<T> = T extends null ? never : T;
export default function notNull<T>(sequence: Iterable<T>): Iterable<NotNull<T>>;
