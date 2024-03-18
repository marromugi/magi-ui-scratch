import { TokenBase } from "../../types";

export const generateTransitionType = async (tokens: TokenBase) => {
  return Object.entries(tokens.transition ?? {}).flatMap(([name]) => {
    return [`"${name}": string | number;`];
  });
};
