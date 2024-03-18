import { TokenBase } from "../../types";

export const generateFontType = async (tokens: TokenBase) => {
  return Object.entries(tokens.font ?? {}).flatMap(
    ([name, codes]) => {
      return [
        `"${name}": {`,
        ...Object.entries(codes).map(([code]) => {
          return `"${code}": string;`;
        }),
        `};`,
      ];
    },
  );
};
