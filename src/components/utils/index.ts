import { Variants, VariantsArgs } from "@/types/util";

export const mv = <T extends Variants>(variants: T) => {
  return (keys: VariantsArgs<T>) => {
    return Object.entries(keys).flatMap(
      ([key, value]) => variants[key][value],
    );
  };
};

export const cBool = <T extends string>(variable: T) => {
  return {
    [variable]: {
      true: variable,
      false: `-${variable}`,
    },
  } as { [key in T]: { true: T; false: `-${T}` } };
};
