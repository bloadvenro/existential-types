/**
 * Omit from T those keys that are assignable to U
 */
export type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;
