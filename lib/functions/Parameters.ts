// Extract function parameters (since v3.1 typescript has this out of the box)
export type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
