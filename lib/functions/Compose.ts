export type Compose = {
  <T extends any[], R2, R1>(fn2: (x: R1) => R2, fn1: (...params: T) => R1): (...params: T) => R2;
  <T extends any[], R3, R2, R1>(fn3: (x: R2) => R3, fn2: (x: R1) => R2, fn1: (...params: T) => R1): (
    ...params: T
  ) => R3;
  <T extends any[], R4, R3, R2, R1>(
    fn4: (x: R3) => R4,
    fn3: (x: R2) => R3,
    fn2: (x: R1) => R2,
    fn1: (...params: T) => R1,
  ): (...params: T) => R4;
  <T extends any[], R5, R4, R3, R2, R1>(
    fn5: (x: R4) => R5,
    fn4: (x: R3) => R4,
    fn3: (x: R2) => R3,
    fn2: (x: R1) => R2,
    fn1: (...params: T) => R1,
  ): (...params: T) => R5;
  <T extends any[], R6, R5, R4, R3, R2, R1>(
    fn6: (x: R5) => R6,
    fn5: (x: R4) => R5,
    fn4: (x: R3) => R4,
    fn3: (x: R2) => R3,
    fn2: (x: R1) => R2,
    fn1: (...params: T) => R1,
  ): (...params: T) => R6;
  <T extends any[], R7, R6, R5, R4, R3, R2, R1>(
    fn7: (x: R6) => R7,
    fn6: (x: R5) => R6,
    fn5: (x: R4) => R5,
    fn4: (x: R3) => R4,
    fn3: (x: R2) => R3,
    fn2: (x: R1) => R2,
    fn1: (...params: T) => R1,
  ): (...params: T) => R7;
  <T extends any[], R8, R7, R6, R5, R4, R3, R2, R1>(
    fn8: (x: R7) => R8,
    fn7: (x: R6) => R7,
    fn6: (x: R5) => R6,
    fn5: (x: R4) => R5,
    fn4: (x: R3) => R4,
    fn3: (x: R2) => R3,
    fn2: (x: R1) => R2,
    fn1: (...params: T) => R1,
  ): (...params: T) => R8;
  <T extends any[], R9, R8, R7, R6, R5, R4, R3, R2, R1>(
    fn9: (x: R8) => R9,
    fn8: (x: R7) => R8,
    fn7: (x: R6) => R7,
    fn6: (x: R5) => R6,
    fn5: (x: R4) => R5,
    fn4: (x: R3) => R4,
    fn3: (x: R2) => R3,
    fn2: (x: R1) => R2,
    fn1: (...params: T) => R1,
  ): (...params: T) => R9;
};
