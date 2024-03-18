import { TokenBase } from "../../types";

export const generateRadiusCss = async (
  radius: NonNullable<TokenBase["radius"]> = {},
) => {
  const content = Object.entries(radius)
    .flatMap(([key]) => {
      return [
        `.mg-radius-${key} {`,
        `border-radius: var(--mg-radius-${key});`,
        "};",
      ];
    })
    .join("\n");

  return content;
};
