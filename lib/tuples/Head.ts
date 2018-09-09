import { Take } from './Take';

export type Head<T extends any[]> = Take<T, 1>;
