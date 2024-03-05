import { CLASSNAME_PREFIX } from "../../const";
import { TokenBase } from "../../types";

export const generateColorCss = async <
  ColorCode extends number,
  Semantics extends string,
>(
  color: NonNullable<TokenBase<ColorCode, Semantics>["color"]>,
  theme: keyof NonNullable<TokenBase<ColorCode, Semantics>["color"]>,
) => {
  const COLOR_STYLE_KEYS = [
    { prefix: "text", style: "color" },
    { prefix: "bg", style: "background-color" },
    { prefix: "border", style: "border-color" },
    { prefix: "fill", style: "fill" },
    { prefix: "stroke", style: "stroke" },
  ];
  const content = Object.entries(color[theme] ?? {})
    .flatMap(([semantic, code]) => {
      switch (typeof code) {
        case "string": {
          return COLOR_STYLE_KEYS.flatMap(({ prefix, style }) => [
            `.${CLASSNAME_PREFIX}-${prefix}-color-${semantic} {`,
            `${style}: var(--${CLASSNAME_PREFIX}-color-${theme}-${semantic});`,
            "};",
          ]);
        }
        case "object": {
          return COLOR_STYLE_KEYS.flatMap(({ prefix, style }) =>
            Object.entries(code ?? {}).flatMap(([scale]) => [
              `.${CLASSNAME_PREFIX}-${prefix}-color-${semantic}-${scale}  {`,
              `${style}: var(--${CLASSNAME_PREFIX}-color-${theme}-${semantic}-${scale});;`,
              "};",
            ]),
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
