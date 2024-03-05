import fs from "fs";
import path from "path";

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
import {
  withType,
  withModule,
  withMediaQuery,
} from "./utils/generator";

const FORMAT: prettier.Options = {
  printWidth: 70,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  endOfLine: "lf",
};

export const defineConfig = <
  ColorCode extends number,
  Semantics extends string,
>(
  token: TokenBase<ColorCode, Semantics>,
) => {
  return token;
};

export const generateTypes = async <
  ColorCode extends number,
  Semantics extends string,
>(
  tokens: TokenBase<ColorCode, Semantics>,
  outDir: string = "./",
) => {
  const color = withType("Color", await generateColorType(tokens));
  const font = withType("Font", await generateFontType(tokens));
  const shadow = withType("Shadow", await generateShadowType(tokens));
  const space = withType("Space", await generateSpaceType(tokens));

  const token = withType("Token", [
    "color: Color;",
    "font: Font;",
    "shadow: Shadow;",
    "space: Space;",
  ]);

  const formattedContent = await prettier.format(
    withModule([color, font, shadow, space, token]),
    {
      ...FORMAT,
      parser: "typescript",
    },
  );

  fs.writeFileSync(
    path.resolve(outDir, "./token.d.ts"),
    formattedContent,
  );
};

export const generateCss = async <
  ColorCode extends number,
  Semantics extends string,
>(
  tokens: TokenBase<ColorCode, Semantics>,
  outDir: string = "./",
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

  fs.writeFileSync(
    path.resolve(outDir, "./magi-ui.css"),
    formattedCss,
  );
};
