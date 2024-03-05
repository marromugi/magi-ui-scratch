import { TokenBase } from "../../types";

export const generateShadowCss = async <
  ColorCode extends number,
  Semantics extends string,
>(
  shadow: NonNullable<TokenBase<ColorCode, Semantics>["shadow"]> = {},
) => {
  const content = Object.entries(shadow)
    .flatMap(([key]) => {
      return [
        `.mg-shadow-${key} {`,
        `box-shadow: var(--mg-shadow-${key});`,
        "};",
      ];
    })
    .join("\n");

  return content;
};
