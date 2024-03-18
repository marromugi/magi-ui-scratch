import { TokenBase } from "../../types";

export const generateFontSizeCss = async (
  fontSize: NonNullable<TokenBase["font"]>["size"] = {},
) => {
  const content = Object.entries(fontSize)
    .flatMap(([key]) => {
      return [
        `.mg-font-size-${key} {`,
        `font-size: var(--mg-font-size-${key});`,
        "};",
      ];
    })
    .join("\n");

  return content;
};
