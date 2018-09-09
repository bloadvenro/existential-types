import { Switch } from '../meta/Switch';

type TakeLast1<T extends any[]> = Switch<
  T['length'],
  {
    default: T;
    1: [T[0]];
    2: [T[1]];
    3: [T[2]];
    4: [T[3]];
    5: [T[4]];
    6: [T[5]];
    7: [T[6]];
    8: [T[7]];
    9: [T[8]];
    10: [T[9]];
  }
>;
type TakeLast2<T extends any[]> = Switch<
  T['length'],
  {
    default: T;
    1: [T[0]];
    2: [T[0], T[1]];
    3: [T[1], T[2]];
    4: [T[2], T[3]];
    5: [T[3], T[4]];
    6: [T[4], T[5]];
    7: [T[5], T[6]];
    8: [T[6], T[7]];
    9: [T[7], T[8]];
    10: [T[8], T[9]];
  }
>;
type TakeLast3<T extends any[]> = Switch<
  T['length'],
  {
    default: T;
    1: [T[0]];
    2: [T[0], T[1]];
    3: [T[0], T[1], T[2]];
    4: [T[1], T[2], T[3]];
    5: [T[2], T[3], T[4]];
    6: [T[3], T[4], T[5]];
    7: [T[4], T[5], T[6]];
    8: [T[5], T[6], T[7]];
    9: [T[6], T[7], T[8]];
    10: [T[7], T[8], T[9]];
  }
>;
type TakeLast4<T extends any[]> = Switch<
  T['length'],
  {
    default: T;
    1: [T[0]];
    2: [T[0], T[1]];
    3: [T[0], T[1], T[2]];
    4: [T[0], T[1], T[2], T[3]];
    5: [T[1], T[2], T[3], T[4]];
    6: [T[2], T[3], T[4], T[5]];
    7: [T[3], T[4], T[5], T[6]];
    8: [T[4], T[5], T[6], T[7]];
    9: [T[5], T[6], T[7], T[8]];
    10: [T[6], T[7], T[8], T[9]];
  }
>;

type TakeLast5<T extends any[]> = Switch<
  T['length'],
  {
    default: T;
    1: [T[0]];
    2: [T[0], T[1]];
    3: [T[0], T[1], T[2]];
    4: [T[0], T[1], T[2], T[3]];
    5: [T[0], T[1], T[2], T[3], T[4]];
    6: [T[1], T[2], T[3], T[4], T[5]];
    7: [T[2], T[3], T[4], T[5], T[6]];
    8: [T[3], T[4], T[5], T[6], T[7]];
    9: [T[4], T[5], T[6], T[7], T[8]];
    10: [T[5], T[6], T[7], T[8], T[9]];
  }
>;
type TakeLast6<T extends any[]> = Switch<
  T['length'],
  {
    default: T;
    1: [T[0]];
    2: [T[0], T[1]];
    3: [T[0], T[1], T[2]];
    4: [T[0], T[1], T[2], T[3]];
    5: [T[0], T[1], T[2], T[3], T[4]];
    6: [T[0], T[1], T[2], T[3], T[4], T[5]];
    7: [T[1], T[2], T[3], T[4], T[5], T[6]];
    8: [T[2], T[3], T[4], T[5], T[6], T[7]];
    9: [T[3], T[4], T[5], T[6], T[7], T[8]];
    10: [T[4], T[5], T[6], T[7], T[8], T[9]];
  }
>;
type TakeLast7<T extends any[]> = Switch<
  T['length'],
  {
    default: T;
    1: [T[0]];
    2: [T[0], T[1]];
    3: [T[0], T[1], T[2]];
    4: [T[0], T[1], T[2], T[3]];
    5: [T[0], T[1], T[2], T[3], T[4]];
    6: [T[0], T[1], T[2], T[3], T[4], T[5]];
    7: [T[0], T[1], T[2], T[3], T[4], T[5], T[6]];
    8: [T[1], T[2], T[3], T[4], T[5], T[6], T[7]];
    9: [T[2], T[3], T[4], T[5], T[6], T[7], T[8]];
    10: [T[3], T[4], T[5], T[6], T[7], T[8], T[9]];
  }
>;
type TakeLast8<T extends any[]> = Switch<
  T['length'],
  {
    default: T;
    1: [T[0]];
    2: [T[0], T[1]];
    3: [T[0], T[1], T[2]];
    4: [T[0], T[1], T[2], T[3]];
    5: [T[0], T[1], T[2], T[3], T[4]];
    6: [T[0], T[1], T[2], T[3], T[4], T[5]];
    7: [T[0], T[1], T[2], T[3], T[4], T[5], T[6]];
    8: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]];
    9: [T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8]];
    10: [T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9]];
  }
>;
type TakeLast9<T extends any[]> = Switch<
  T['length'],
  {
    default: T;
    1: [T[0]];
    2: [T[0], T[1]];
    3: [T[0], T[1], T[2]];
    4: [T[0], T[1], T[2], T[3]];
    5: [T[0], T[1], T[2], T[3], T[4]];
    6: [T[0], T[1], T[2], T[3], T[4], T[5]];
    7: [T[0], T[1], T[2], T[3], T[4], T[5], T[6]];
    8: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]];
    9: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8]];
    10: [T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9]];
  }
>;
type TakeLast10<T extends any[]> = Switch<
  T['length'],
  {
    default: T;
    1: [T[0]];
    2: [T[0], T[1]];
    3: [T[0], T[1], T[2]];
    4: [T[0], T[1], T[2], T[3]];
    5: [T[0], T[1], T[2], T[3], T[4]];
    6: [T[0], T[1], T[2], T[3], T[4], T[5]];
    7: [T[0], T[1], T[2], T[3], T[4], T[5], T[6]];
    8: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]];
    9: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8]];
    10: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9]];
  }
>;

export type TakeLast<T extends any[], U extends number> = Switch<
  U,
  {
    default: never[];
    1: TakeLast1<T>;
    2: TakeLast2<T>;
    3: TakeLast3<T>;
    4: TakeLast4<T>;
    5: TakeLast5<T>;
    6: TakeLast6<T>;
    7: TakeLast7<T>;
    8: TakeLast8<T>;
    9: TakeLast9<T>;
    10: TakeLast10<T>;
  }
>;
