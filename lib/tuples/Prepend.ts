export type Prepend<T, U extends any[]> = ((item: T, ...tuple: U) => any) extends ((...result: infer R) => any)
  ? R
  : never;
