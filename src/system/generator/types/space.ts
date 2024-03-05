import { TokenBase } from "../../types";

export const generateSpaceType = async <
  ColorCode extends number,
  Semantics extends string,
>(
  tokens: TokenBase<ColorCode, Semantics>,
) => {
  return Object.entries(tokens.space ?? {}).flatMap(([name]) => {
    return [`${name}: string | number;`];
  });
};
