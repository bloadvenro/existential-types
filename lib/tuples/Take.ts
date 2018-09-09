import { Switch } from '../meta//Switch';

type Take1<T extends any[]> = [T[0]];
type Take2<T extends any[]> = [T[0], T[1]];
type Take3<T extends any[]> = [T[0], T[1], T[2]];
type Take4<T extends any[]> = [T[0], T[1], T[2], T[3]];
type Take5<T extends any[]> = [T[0], T[1], T[2], T[3], T[4]];
type Take6<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5]];
type Take7<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6]];
type Take8<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]];
type Take9<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8]];
type Take10<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9]];

export type Take<T extends any[], U extends number> = Switch<
  U,
  {
    default: never[];
    1: Take1<T>;
    2: Take2<T>;
    3: Take3<T>;
    4: Take4<T>;
    5: Take5<T>;
    6: Take6<T>;
    7: Take7<T>;
    8: Take8<T>;
    9: Take9<T>;
    10: Take10<T>;
  }
>;
