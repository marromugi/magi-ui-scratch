import { TokenBase } from "../../types";

export const generateFontFamilyCss = async (
  fontFamily: NonNullable<TokenBase["font"]>["family"] = {},
) => {
  const content = Object.entries(fontFamily)
    .flatMap(([key]) => {
      return [
        `.mg-font-family-${key} {`,
        `font-family: var(--mg-font-family-${key});`,
        "};",
      ];
    })
    .join("\n");

  return content;
};
