import { Switch } from '../meta/Switch';

type Drop1<T extends any[]> = Switch<
  T['length'],
  {
    default: T;
    0: [];
    1: [];
    2: [T[1]];
    3: [T[1], T[2]];
    4: [T[1], T[2], T[3]];
    5: [T[1], T[2], T[3], T[4]];
    6: [T[1], T[2], T[3], T[4], T[5]];
    7: [T[1], T[2], T[3], T[4], T[5], T[6]];
    8: [T[1], T[2], T[3], T[4], T[5], T[6], T[7]];
    9: [T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8]];
    10: [T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9]];
    /* 10 items tuple MAX */
  }
>;

type Drop2<T extends any[]> = Drop1<Drop1<T>>;
type Drop3<T extends any[]> = Drop1<Drop2<T>>;
type Drop4<T extends any[]> = Drop1<Drop3<T>>;
type Drop5<T extends any[]> = Drop1<Drop4<T>>;
type Drop6<T extends any[]> = Drop1<Drop5<T>>;
type Drop7<T extends any[]> = Drop1<Drop6<T>>;
type Drop8<T extends any[]> = Drop1<Drop7<T>>;
type Drop9<T extends any[]> = Drop1<Drop8<T>>;
type Drop10<T extends any[]> = Drop1<Drop9<T>>;

export type Drop<T extends any[], U extends number = 1> = Switch<
  U,
  {
    default: never;
    /* Ten strategies for dropping up to 10 tuple items */
    1: Drop1<T>;
    2: Drop2<T>;
    3: Drop3<T>;
    4: Drop4<T>;
    5: Drop5<T>;
    6: Drop6<T>;
    7: Drop7<T>;
    8: Drop8<T>;
    9: Drop9<T>;
    10: Drop10<T>;
  }
>;
