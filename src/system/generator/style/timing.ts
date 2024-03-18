import { TokenBase } from "../../types";

export const generateTimingCss = async (
  timing: NonNullable<TokenBase["timing"]> = {},
) => {
  const content = Object.entries(timing)
    .flatMap(([key]) => {
      return [
        `.mg-timing-${key} {`,
        `transition-timing-function: var(--mg-timing-${key});`,
        "};",
      ];
    })
    .join("\n");

  return content;
};
