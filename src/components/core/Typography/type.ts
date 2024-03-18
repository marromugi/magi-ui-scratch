import { ComponentProps } from "react";

import { TYPOGRAPHY_VARIABLES } from "./const";

import { VariantsType } from "@/types/util";

export type TypographyElements = Extract<
  keyof JSX.IntrinsicElements,
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "address"
  | "big"
  | "small"
  | "b"
  | "i"
  | "s"
  | "u"
  | "tt"
  | "strong"
  | "code"
>;

export type TypographyProps<Element extends TypographyElements> = {
  as: Element;
} & ComponentProps<Element> &
  VariantsType<typeof TYPOGRAPHY_VARIABLES>;
