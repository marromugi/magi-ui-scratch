import { TokenBase } from "../../types";

export const generateColorType = async <
  ColorCode extends number,
  Semantics extends string,
>(
  tokens: TokenBase<ColorCode, Semantics>,
) => {
  return Object.entries(tokens.color ?? {}).flatMap(
    ([theme, colors]) => {
      return [
        `${theme}: {`,
        ...Object.entries(colors).map(([name, codes]) => {
          return typeof codes === "string"
            ? [`${name}: string;`].join("\n")
            : [
                `${name}: {`,
                ...Object.entries(codes ?? {}).map(
                  ([code]) => `${code}: string;`,
                ),
                "};",
              ].join("\n");
        }),
        `};`,
      ];
    },
  );
};
