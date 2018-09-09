// Recursively mark all properties as optional
export type PartialDeep<T> = { [K in keyof T]?: PartialDeep<T[K]> };
