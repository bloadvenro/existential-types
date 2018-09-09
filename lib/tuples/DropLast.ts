import { Switch } from '../meta/Switch';

type DropLast1<T extends any[]> = Switch<
  T['length'],
  {
    default: never[];
    0: [];
    1: [];
    2: [T[0]];
    3: [T[0], T[1]];
    4: [T[0], T[1], T[2]];
    5: [T[0], T[1], T[2], T[3]];
    6: [T[0], T[1], T[2], T[3], T[4]];
    7: [T[0], T[1], T[2], T[3], T[4], T[5]];
    8: [T[0], T[1], T[2], T[3], T[4], T[5], T[6]];
    9: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]];
    10: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8]];
    /* 10 items tuple MAX */
  }
>;

type DropLast2<T extends any[]> = DropLast1<DropLast1<T>>;
type DropLast3<T extends any[]> = DropLast1<DropLast2<T>>;
type DropLast4<T extends any[]> = DropLast1<DropLast3<T>>;
type DropLast5<T extends any[]> = DropLast1<DropLast4<T>>;
type DropLast6<T extends any[]> = DropLast1<DropLast5<T>>;
type DropLast7<T extends any[]> = DropLast1<DropLast6<T>>;
type DropLast8<T extends any[]> = DropLast1<DropLast7<T>>;
type DropLast9<T extends any[]> = DropLast1<DropLast8<T>>;
type DropLast10<T extends any[]> = DropLast1<DropLast9<T>>;

export type DropLast<T extends any[], U extends number = 1> = Switch<
  U,
  {
    default: never;
    /* Ten strategies for dropping up to 10 tuple items */
    1: DropLast1<T>;
    2: DropLast2<T>;
    3: DropLast3<T>;
    4: DropLast4<T>;
    5: DropLast5<T>;
    6: DropLast6<T>;
    7: DropLast7<T>;
    8: DropLast8<T>;
    9: DropLast9<T>;
    10: DropLast10<T>;
  }
>;
