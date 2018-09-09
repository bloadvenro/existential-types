export type Pipe = {
  <T extends any[], R1, R2>(fn1: (...params: T) => R1, fn2: (x: R1) => R2): (...params: T) => R2;
  <T extends any[], R1, R2, R3>(fn1: (...params: T) => R1, fn2: (x: R1) => R2, fn3: (x: R2) => R3): (
    ...params: T
  ) => R3;
  <T extends any[], R1, R2, R3, R4>(
    fn1: (...params: T) => R1,
    fn2: (x: R1) => R2,
    fn3: (x: R2) => R3,
    fn4: (x: R3) => R4,
  ): (...params: T) => R4;
  <T extends any[], R1, R2, R3, R4, R5>(
    fn1: (...params: T) => R1,
    fn2: (x: R1) => R2,
    fn3: (x: R2) => R3,
    fn4: (x: R3) => R4,
    fn5: (x: R4) => R5,
  ): (...params: T) => R5;
  <T extends any[], R1, R2, R3, R4, R5, R6>(
    fn1: (...params: T) => R1,
    fn2: (x: R1) => R2,
    fn3: (x: R2) => R3,
    fn4: (x: R3) => R4,
    fn5: (x: R4) => R5,
    fn6: (x: R5) => R6,
  ): (...params: T) => R6;
  <T extends any[], R1, R2, R3, R4, R5, R6, R7>(
    fn1: (...params: T) => R1,
    fn2: (x: R1) => R2,
    fn3: (x: R2) => R3,
    fn4: (x: R3) => R4,
    fn5: (x: R4) => R5,
    fn6: (x: R5) => R6,
    fn7: (x: R6) => R7,
  ): (...params: T) => R7;
  <T extends any[], R1, R2, R3, R4, R5, R6, R7, R8>(
    fn1: (...params: T) => R1,
    fn2: (x: R1) => R2,
    fn3: (x: R2) => R3,
    fn4: (x: R3) => R4,
    fn5: (x: R4) => R5,
    fn6: (x: R5) => R6,
    fn7: (x: R6) => R7,
    fn8: (x: R7) => R8,
  ): (...params: T) => R8;
  <T extends any[], R1, R2, R3, R4, R5, R6, R7, R8, R9>(
    fn1: (...params: T) => R1,
    fn2: (x: R1) => R2,
    fn3: (x: R2) => R3,
    fn4: (x: R3) => R4,
    fn5: (x: R4) => R5,
    fn6: (x: R5) => R6,
    fn7: (x: R6) => R7,
    fn8: (x: R7) => R8,
    fn9: (x: R8) => R9,
  ): (...params: T) => R9;
};
