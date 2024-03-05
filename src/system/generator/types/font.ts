import { TokenBase } from "../../types";

export const generateFontType = async <
  ColorCode extends number,
  Semantics extends string,
>(
  tokens: TokenBase<ColorCode, Semantics>,
) => {
  return Object.entries(tokens.font ?? {}).flatMap(
    ([name, codes]) => {
      return [
        `${name}: {`,
        ...Object.entries(codes).map(([code]) => {
          return `${code}: string;`;
        }),
        `};`,
      ];
    },
  );
};
