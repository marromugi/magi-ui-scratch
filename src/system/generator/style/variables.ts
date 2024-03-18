import { CLASSNAME_PREFIX } from "../../const";
import { TokenBase } from "../../types";
import { generateNestKeyAndValue } from "../../utils/generator";

const generateVariableFileContentFromObject = (obj: object) => {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");
};

export const generateVariables = async (token: TokenBase) => {
  const variables = generateNestKeyAndValue(
    token,
    `--${CLASSNAME_PREFIX}-`,
  );

  const content = [
    ":root {",
    generateVariableFileContentFromObject(variables),
    "font-kerning: none;",
    "}",
  ].join("\n");

  return content;
};
