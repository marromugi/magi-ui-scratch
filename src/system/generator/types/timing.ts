import { TokenBase } from "../../types";

export const generateTimingType = async (tokens: TokenBase) => {
  return Object.entries(tokens.timing ?? {}).flatMap(([name]) => {
    return [`"${name}": string | number;`];
  });
};
