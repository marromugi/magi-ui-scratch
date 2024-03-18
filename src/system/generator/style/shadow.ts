import { TokenBase } from "../../types";

export const generateShadowCss = async (
  shadow: NonNullable<TokenBase["shadow"]> = {},
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
