import { Token } from "magi-ui";

import { MODULE_NAME } from "../const";
import { NestedKey } from "../types";

export const getCssVariable = (key: NestedKey<Token>) => {
  const keys = key.replace(".", "-");
  return `--mg-${keys}`;
};

export const color = <T extends keyof Token["color"]["common"]>(
  code: T,
  scale: keyof T,
  theme: keyof Token["color"] = "common",
) => {
  return `--mg-color-${theme}-${code}-${scale.toString()}`;
};

export const generateNestKeyAndValue = (
  obj: object,
  prefix: string = "",
  suffix: string = "",
  holder?: object,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = holder ?? ({} as any);

  const setAffix = (value: string) => `${prefix}${value}${suffix}`;

  Object.entries(obj).forEach(([key, value]) => {
    const valueType = typeof value;
    if (valueType === "string" || valueType === "number") {
      result[setAffix(key)] = value;
      return;
    }
    if (Array.isArray(value)) {
      result[setAffix(key)] = value.map((v) => `"${v}"`).join(", ");
      return;
    }
    if (valueType === "object") {
      generateNestKeyAndValue(
        Object.entries(value).reduce(
          (p, n) => ({ ...p, [`${key}-${n[0]}`]: n[1] }),
          {},
        ),
        prefix,
        suffix,
        result,
      );
    }
  });

  return result;
};

export const wrapToType = (name: string, lines: string[]) => {
  return [`export type ${name} = {`, ...lines, `};`, ""].join("\n");
};

export const wrapToModule = (lines: string[]) => {
  return [`declare module '${MODULE_NAME}' {`, ...lines, "};"].join(
    "\n",
  );
};

export const withMediaQuery = (
  condition: string,
  lines: string[] | string,
) => {
  switch (typeof lines) {
    case "string": {
      return [`@media (${condition}) {`, lines, "};"].join("\n");
    }
    default: {
      return [`@media (${condition}) {`, ...lines, "};"].join("\n");
    }
  }
};
