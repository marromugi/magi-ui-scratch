export type Variants = Record<
  string,
  Record<string, string | string[]>
>;

export type VariantsArgs<T extends Variants> = {
  [K in keyof T]: keyof T[K] extends "true" | "false"
    ? boolean
    : keyof T[K];
};

export type VariantsType<
  A extends (keys: VariantsArgs<never>) => string[],
> = Parameters<A>[0];
