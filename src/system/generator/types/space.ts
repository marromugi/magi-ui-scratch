import { TokenBase } from "../../types";

export const generateSpaceType = async (tokens: TokenBase) => {
  return Object.entries(tokens.space ?? {}).flatMap(([name]) => {
    return [`"${name}": string | number;`];
  });
};
