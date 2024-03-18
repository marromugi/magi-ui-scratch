import { TokenBase } from "../../types";

export const generateFontTrackingCss = async (
  fontSize: NonNullable<TokenBase["font"]>["tracking"] = {},
) => {
  const content = Object.entries(fontSize)
    .flatMap(([key]) => {
      return [
        `.mg-font-tracking-${key} {`,
        `letter-spacing: var(--mg-font-tracking-${key});`,
        "};",
      ];
    })
    .join("\n");

  return content;
};
