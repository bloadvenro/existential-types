// Similar to `keyof` but returns union of values
export type ValueOf<T> = T[keyof T];
