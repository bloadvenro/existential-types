// https://github.com/Microsoft/TypeScript/issues/23724
export type KeyofStringsOnly<T> = Extract<keyof T, string>;
