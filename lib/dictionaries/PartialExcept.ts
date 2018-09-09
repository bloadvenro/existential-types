import { Omit } from './Omit';

// Make all properties of T optional except assignable to U
export type PartialExcept<T, U extends keyof T> = Partial<Omit<T, U>> & Pick<T, U>;
