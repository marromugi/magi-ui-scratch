import { TokenBase } from "../../types";

export const generateShadowType = async <
  ColorCode extends number,
  Semantics extends string,
>(
  tokens: TokenBase<ColorCode, Semantics>,
) => {
  return Object.entries(tokens.shadow ?? {}).flatMap(([name]) => {
    return [`${name}: string;`];
  });
};
