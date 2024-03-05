import { TokenBase } from "../../types";

export const generateSpaceCss = async <
  ColorCode extends number,
  Semantics extends string,
>(
  space: NonNullable<TokenBase<ColorCode, Semantics>["space"]> = {},
) => {
  const content = Object.entries(space)
    .flatMap(([key]) => {
      return ["", "-top", "-right", "-bottom", "-left"].flatMap(
        (way) => {
          return [
            `.mg-m${way}-${key} {`,
            `margin${way}: var(--mg-space-${key});`,
            "};",
            `.mg-p${way}-${key} {`,
            `padding${way}: var(--mg-space-${key});`,
            "};",
          ];
        },
      );
    })
    .join("\n");

  return content;
};
