import { Token } from "magi-ui";

import { CLASSNAME_PREFIX } from "../const";
import { NestedMostBottomKey } from "../types";

export type Direction = "top" | "right" | "bottom" | "left";

export type ColorStyleKey =
  | "text"
  | "border"
  | "bg"
  | "fill"
  | "stroke";
type FontStyleKey = keyof Token["font"];
type SpaceStyleKey =
  | `margin-${Direction}`
  | "margin"
  | "padding"
  | `padding-${Direction}`;

type PseudoByToken = {
  [key in ColorStyleKey]:
    | "hover"
    | "checked"
    | "link"
    | "visited"
    | "active"
    | "focus"
    | "focus-visible";
};

type Pseudo<T> = T extends keyof PseudoByToken
  ? PseudoByToken[T]
  : unknown;

// move to util
type UnwrapPrefix<
  T extends string,
  K extends string,
> = T extends `${K}-${infer U}` ? U : never;

type StyleKey =
  | keyof Pick<Token, "radius" | "shadow" | "space">
  | ColorStyleKey
  | `font-${FontStyleKey}`
  | "margin"
  | `margin-${Direction}`
  | "padding"
  | `padding-${Direction}`;

type Variable<T extends StyleKey> = T extends ColorStyleKey
  ? NestedMostBottomKey<Token["color"]>
  : T extends `font-${FontStyleKey}`
    ? NestedMostBottomKey<Token["font"][UnwrapPrefix<T, "font">]>
    : T extends SpaceStyleKey
      ? NestedMostBottomKey<Token["space"]>
      : T extends keyof Token
        ? NestedMostBottomKey<Token[T]>
        : never;

export const token = <T extends StyleKey>(
  style: T,
  variable: Variable<T>,
  pseudo?: Pseudo<T>,
) => {
  switch (style) {
    case "bg":
    case "border":
    case "fill":
    case "stroke":
    case "text": {
      const [semantic, scale] = variable.split(".");
      return `${pseudo ? `${pseudo}-` : ""}${CLASSNAME_PREFIX}-${style}-color-${semantic}${scale ? `-${scale}` : ""}`;
    }
    case "font-family":
    case "font-lineSpace":
    case "font-size":
    case "font-tracking": {
      return `${pseudo ? `${pseudo}-` : ""}${CLASSNAME_PREFIX}-${style}-${variable}`;
    }
    case "margin":
    case "margin-top":
    case "margin-bottom":
    case "margin-left":
    case "margin-right":
    case "padding":
    case "padding-top":
    case "padding-bottom":
    case "padding-left":
    case "padding-right": {
      return `${pseudo ? `${pseudo}-` : ""}${CLASSNAME_PREFIX}-${style}-${variable}`;
    }
    default: {
      return `${pseudo ? `${pseudo}-` : ""}${CLASSNAME_PREFIX}-${style}-${variable}`;
    }
  }
};
