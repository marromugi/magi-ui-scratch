import { TokenBase } from "../../types";

export const generateShadowType = async (tokens: TokenBase) => {
  return Object.entries(tokens.shadow ?? {}).flatMap(([name]) => {
    return [`"${name}": string;`];
  });
};
