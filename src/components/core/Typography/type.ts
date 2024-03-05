import { ComponentProps } from "react";

type TypographyElements = Extract<
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
} & ComponentProps<Element>;
