// Find difference betwen types T and U.
export type Diff<T, U> = Exclude<T, Extract<T, U>> | Exclude<U, Extract<T, U>>;
