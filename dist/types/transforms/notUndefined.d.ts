export type NotUndefined<T> = T extends undefined ? never : T;
export default function notUndefined<T>(sequence: Iterable<T>): Iterable<NotUndefined<T>>;
