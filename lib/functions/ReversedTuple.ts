export type ReversedTuple = {
  <T1>(t1: T1): [T1];
  <T1, T2>(t1: T1, t2: T2): [T2, T1];
  <T1, T2, T3>(t1: T1, t2: T2, t3: T3): [T3, T2, T1];
  <T1, T2, T3, T4>(t1: T1, t2: T2, t3: T3, t4: T4): [T4, T3, T2, T1];
  <T1, T2, T3, T4, T5>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): [
    T5,
    T4,
    T3,
    T2,
    T1
  ];
  <T1, T2, T3, T4, T5, T6>(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): [
    T6,
    T5,
    T4,
    T3,
    T2,
    T1
  ];
  <T1, T2, T3, T4, T5, T6, T7>(
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
  ): [T7, T6, T5, T4, T3, T2, T1];
  <T1, T2, T3, T4, T5, T6, T7, T8>(
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
  ): [T8, T7, T6, T5, T4, T3, T2, T1];
  <T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9,
  ): [T9, T8, T7, T6, T5, T4, T3, T2, T1];
};
