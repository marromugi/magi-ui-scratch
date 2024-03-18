import { CLASSNAME_PREFIX } from "../../const";
import { TokenBase } from "../../types";

import { ColorStyleKey } from "@/system/utils";

export const generateColorCss = async (
  color: NonNullable<TokenBase["color"]>,
  theme: keyof NonNullable<TokenBase["color"]>,
) => {
  const COLOR_STYLE_KEYS: { prefix: ColorStyleKey; style: string }[] =
    [
      { prefix: "text", style: "color" },
      { prefix: "bg", style: "background-color" },
      { prefix: "border", style: "border-color" },
      { prefix: "fill", style: "fill" },
      { prefix: "stroke", style: "stroke" },
    ];
  const PSEUDOS = [
    "",
    "hover",
    "checked",
    // "required",
    "link",
    "visited",
    // "playing",
    // "paused",
    "active",
    "focus",
    "focus-visible",
    // "target",
  ];
  const content = Object.entries(color ?? {})
    .flatMap(([semantic, scales]) => {
      const key = isNaN(parseInt(Object.keys(scales)[0])) ? "" : 1;
      switch (typeof key) {
        case "string": {
          return COLOR_STYLE_KEYS.flatMap(({ prefix, style }) => {
            return PSEUDOS.flatMap((pseudo) => [
              `.${pseudo ? `${pseudo}-` : ""}${CLASSNAME_PREFIX}-${prefix}-color-${semantic}${pseudo && `:${pseudo}`} {`,
              `${style}: var(--${CLASSNAME_PREFIX}-color-${semantic}-${theme});`,
              "};",
            ]);
          });
        }
        case "number": {
          return COLOR_STYLE_KEYS.flatMap(({ prefix, style }) =>
            Object.entries(scales ?? {}).flatMap(([scale]) => {
              return PSEUDOS.flatMap((pseudo) => [
                `.${pseudo ? `${pseudo}-` : ""}${CLASSNAME_PREFIX}-${prefix}-color-${semantic}-${scale}${pseudo && `:${pseudo}`} {`,
                `${style}: var(--${CLASSNAME_PREFIX}-color-${semantic}-${scale}-${theme});`,
                "};",
              ]);
            }),
          );
        }
        default: {
          return [];
        }
      }
    })
    .join("\n");

  return content;
};
