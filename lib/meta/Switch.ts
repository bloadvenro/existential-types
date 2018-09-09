import { Dictionary } from '../dictionaries/Dictionary';
import { NumericDictionary } from '../dictionaries/NumericDictionary';

/**
 * Select type from types dictionary based on type of key. This type is very
 * useful in many scenarios.
 *
 * Switch<'two', { default: true, 0: 1, 'two': 2 }> // 2
 * Switch<'foo', { default: true, 0: 1, 'two': 2 }> // true
 *
 * TCase type is not predefined and generally comes from outside of Switch.
 */
export type Switch<
  TCase extends number | string,
  TCaseDictionary extends { default: any } & Dictionary & NumericDictionary
> = TCaseDictionary[TCase extends keyof TCaseDictionary ? TCase : 'default'];
