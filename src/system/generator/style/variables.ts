import { CLASSNAME_PREFIX } from "../../const";
import { TokenBase } from "../../types";
import { generateNestKeyAndValue } from "../../utils";

const generateVariableFileContentFromObject = (obj: object) => {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");
};

export const generateVariables = async <
  ColorCode extends number,
  Semantics extends string,
>(
  token: TokenBase<ColorCode, Semantics>,
) => {
  const variables = generateNestKeyAndValue(
    token,
    `--${CLASSNAME_PREFIX}-`,
  );

  console.log(variables);

  const content = [
    ":root {",
    generateVariableFileContentFromObject(variables),
    "}",
  ].join("\n");

  return content;
};
