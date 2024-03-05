import fs from "fs";

import prettier from "prettier";

import {
  generateVariables,
  generateColorCss,
  generateFontSizeCss,
  generateFontFamilyCss,
  generateShadowCss,
  generateSpaceCss,
} from "./generator/style";
import {
  generateColorType,
  generateFontType,
  generateShadowType,
  generateSpaceType,
} from "./generator/types";
import { TokenBase } from "./types";
import { wrapToType, wrapToModule, withMediaQuery } from "./utils";

const FORMAT: prettier.Options = {
  printWidth: 70,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  endOfLine: "lf",
};

export const generateTypes = async <
  ColorCode extends number,
  Semantics extends string,
>(
  tokens: TokenBase<ColorCode, Semantics>,
) => {
  const color = wrapToType("Color", await generateColorType(tokens));
  const font = wrapToType("Font", await generateFontType(tokens));
  const shadow = wrapToType(
    "Shadow",
    await generateShadowType(tokens),
  );
  const space = wrapToType("Space", await generateSpaceType(tokens));

  const token = wrapToType("Token", [
    "color: Color;",
    "font: Font;",
    "shadow: Shadow;",
    "space: Space;",
  ]);

  const formattedContent = await prettier.format(
    wrapToModule([color, font, shadow, space, token]),
    {
      ...FORMAT,
      parser: "typescript",
    },
  );

  fs.writeFileSync("./token.d.ts", formattedContent);
};

export const generateCss = async <
  ColorCode extends number,
  Semantics extends string,
>(
  tokens: TokenBase<ColorCode, Semantics>,
) => {
  const css: string[] = [];
  css.push(await generateVariables(tokens));
  if (tokens.color) {
    css.push(
      withMediaQuery(
        "prefers-color-scheme: light",
        await generateColorCss(tokens.color, "light"),
      ),
    );
    css.push(
      withMediaQuery(
        "prefers-color-scheme: dark",
        await generateColorCss(tokens.color, "dark"),
      ),
    );
    css.push(await generateColorCss(tokens.color, "common"));
  }
  css.push(await generateFontSizeCss(tokens.font?.size));
  css.push(await generateFontFamilyCss(tokens.font?.family));
  css.push(await generateShadowCss(tokens.shadow));
  css.push(await generateSpaceCss(tokens.space));

  const formattedCss = await prettier.format(css.join("\n\n"), {
    ...FORMAT,
    parser: "css",
  });

  fs.writeFileSync("./magi-ui.css", formattedCss);
};
