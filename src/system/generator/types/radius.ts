import { TokenBase } from "../../types";

export const generateRadiusType = async (tokens: TokenBase) => {
  return Object.entries(tokens.radius ?? {}).flatMap(([name]) => {
    return [`"${name}": string | number;`];
  });
};
