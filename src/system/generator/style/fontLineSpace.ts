import { TokenBase } from "../../types";

export const generateFontLineSpaceCss = async (
  fontSize: NonNullable<TokenBase["font"]>["lineSpace"] = {},
) => {
  const content = Object.entries(fontSize)
    .flatMap(([key]) => {
      return [
        `.mg-font-lineSpace-${key} {`,
        `line-height: var(--mg-font-lineSpace-${key});`,
        "};",
      ];
    })
    .join("\n");

  return content;
};
