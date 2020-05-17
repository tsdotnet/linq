/**
 * @packageDocumentation
 * @module predicates
 */
declare type NotNull<T> = T extends null ? never : T;
export default function isNotNull<T extends any>(e: T): e is NotNull<T>;
export {};
