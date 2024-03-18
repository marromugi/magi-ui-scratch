import { MODULE_NAME } from "../const";

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

export const withType = (name: string, lines: string[]) => {
  return [`export type ${name} = {`, ...lines, `};`, ""].join("\n");
};

export const withModule = (lines: string[]) => {
  return [
    `declare module '${MODULE_NAME}' {`,
    ...lines,
    "};",
    'declare module "*.css";',
    'declare module "*.scss";',
  ].join("\n");
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
