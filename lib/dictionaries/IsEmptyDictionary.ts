import { Primitive } from '../aliases/Primitive';

/*
 * Empty dictionary ({}) is a dictionary without keys. This means thas `keyof {}` is `never`.
 * 
 * Beware of `object` type (`keyof object` is `never`)!
 * Beware of `unknown` type (as it's in domain of every type and `keyof unknown` is also `never`)!
 * 
 * There are several ways to check is empty set. Another one is to filter all other types that has
 * no keys (void, undefined, null, never), then check `keyof T` to be `never`. Rest of types (string,
 * boolean, number, symbol, any, any[], Function, non-empty dictionary) will have any key unions.
 * Unfortunately this way has the same problems with `unkrown` and `object` types.
 */
export type IsEmptyDictionary<T> = T extends never
  ? false
  : T extends Primitive
    ? false
    : T extends any[] ? false : T extends Function ? false : keyof T extends never ? true : false;
