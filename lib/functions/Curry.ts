import { Switch } from '../meta/Switch';
import { Take } from '../tuples/Take';
import { TakeLast } from '../tuples/TakeLast';

type Curried1<T extends any[], R> = {
  (...args: T): R;
};

type Curried2<T extends any[], R> = {
  (...args: Take<T, 1>): Curried1<TakeLast<T, 1>, R>;
  (...args: T): R;
};

type Curried3<T extends any[], R> = {
  (...args: Take<T, 1>): Curried2<TakeLast<T, 2>, R>;
  (...args: Take<T, 2>): Curried1<TakeLast<T, 1>, R>;
  (...args: T): R;
};

type Curried4<T extends any[], R> = {
  (...args: Take<T, 1>): Curried3<TakeLast<T, 3>, R>;
  (...args: Take<T, 2>): Curried2<TakeLast<T, 2>, R>;
  (...args: Take<T, 3>): Curried1<TakeLast<T, 1>, R>;
  (...args: T): R;
};

type Curried5<T extends any[], R> = {
  (...args: Take<T, 1>): Curried4<TakeLast<T, 4>, R>;
  (...args: Take<T, 2>): Curried3<TakeLast<T, 3>, R>;
  (...args: Take<T, 3>): Curried2<TakeLast<T, 2>, R>;
  (...args: Take<T, 4>): Curried1<TakeLast<T, 1>, R>;
  (...args: T): R;
};

type Curried6<T extends any[], R> = {
  (...args: Take<T, 1>): Curried5<TakeLast<T, 5>, R>;
  (...args: Take<T, 2>): Curried4<TakeLast<T, 4>, R>;
  (...args: Take<T, 3>): Curried3<TakeLast<T, 3>, R>;
  (...args: Take<T, 4>): Curried2<TakeLast<T, 2>, R>;
  (...args: Take<T, 5>): Curried1<TakeLast<T, 1>, R>;
  (...args: T): R;
};

type Curried7<T extends any[], R> = {
  (...args: Take<T, 1>): Curried6<TakeLast<T, 6>, R>;
  (...args: Take<T, 2>): Curried5<TakeLast<T, 5>, R>;
  (...args: Take<T, 3>): Curried4<TakeLast<T, 4>, R>;
  (...args: Take<T, 4>): Curried3<TakeLast<T, 3>, R>;
  (...args: Take<T, 5>): Curried2<TakeLast<T, 2>, R>;
  (...args: Take<T, 6>): Curried1<TakeLast<T, 1>, R>;
  (...args: T): R;
};

type Curried<T extends any[], R> = Switch<
  T['length'],
  {
    default: (...args: T) => R;
    2: Curried2<T, R>;
    3: Curried3<T, R>;
    4: Curried4<T, R>;
    5: Curried5<T, R>;
    6: Curried6<T, R>;
    7: Curried7<T, R>;
  }
>;

export type Curry = <T extends any[], R>(fn: (...args: T) => R) => Curried<T, R>;
