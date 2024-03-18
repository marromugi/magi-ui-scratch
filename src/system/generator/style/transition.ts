import { TokenBase } from "../../types";

export const generateTransitionCss = async (
  transition: NonNullable<TokenBase["transition"]> = {},
) => {
  const content = Object.entries(transition)
    .flatMap(([key]) => {
      return [
        `.mg-transition-${key} {`,
        `transition: var(--mg-transition-${key});`,
        "};",
      ];
    })
    .join("\n");

  return content;
};
