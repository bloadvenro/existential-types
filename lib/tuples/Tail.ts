import { TakeLast } from './TakeLast';

export type Tail<T extends any[]> = TakeLast<T, 1>;
