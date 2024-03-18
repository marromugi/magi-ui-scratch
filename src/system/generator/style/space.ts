import { TokenBase } from "../../types";

import { Direction } from "@/system/utils";

export const generateSpaceCss = async (
  space: NonNullable<TokenBase["space"]> = {},
) => {
  const content = Object.entries(space)
    .flatMap(([key]) => {
      const directions: `-${Direction}`[] = [
        "-top",
        "-right",
        "-bottom",
        "-left",
      ];

      return ["", ...directions].flatMap((way) => {
        return [
          `.mg-margin${way}-${key} {`,
          `margin${way}: var(--mg-space-${key});`,
          "};",
          `.mg-padding${way}-${key} {`,
          `padding${way}: var(--mg-space-${key});`,
          "};",
        ];
      });
    })
    .join("\n");

  return content;
};
