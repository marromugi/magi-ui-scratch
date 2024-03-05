import { Token as MagiToken } from "magi-ui";

export type Theme = "common" | "light" | "dark";

type WithTheme<T = unknown> = {
  common: T;
  light?: T;
  dark?: T;
};

type Color<T extends number, Semantics extends string> = {
  [key in Semantics]:
    | {
        [key in T]: string;
      }
    | string;
};
export type TokenBase<
  ColorCode extends number,
  Semantics extends string,
> = {
  font?: {
    // size: {
    //   xs?: string;
    //   sm?: string;
    //   md?: string;
    //   lg?: string;
    // };
    size?: Record<string, { [key in number]: string }>;
    // size?: Record<string, {
    //   size: string,
    //   line: string
    //   kerning: string
    //  }>;
    family?: Record<string, string[]>;
    // family: {
    //   base: string[];
    // };
    // weight: {
    //   thin: 100;
    //   extralight: 200;
    //   light: 300;
    //   normal: 400;
    //   medium: 500;
    //   semibold: 600;
    //   bold: 700;
    //   extrabold: 800;
    //   black: 900;
    // };
  };
  color?: WithTheme<Color<ColorCode, Semantics>>;
  // color: {
  //   gray: {
  //     100: string;
  //     200: string;
  //     300: string;
  //     400: string;
  //     500: string;
  //     600: string;
  //     700: string;
  //     800: string;
  //     900: string;
  //   };
  // };
  // radius: {
  //   sm: string;
  //   md: string;
  //   lg: string;
  //   full: string;
  // };
  shadow?: Record<string, string>;
  space?: Record<string, string | number>;
};

export type Token = Pick<
  TokenBase<
    900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100 | 50,
    "primary"
  >,
  "color"
> & {
  font: {
    size: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    family: {
      sans: string[];
      serif: string[];
      mono: string[];
    };
  };
  shadow: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  radius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  space: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
};

export type NestedKey<T extends object> = {
  [Key in keyof T & (string | number)]: T[Key] extends object
    ? `${Key}` | `${Key}.${NestedKey<T[Key]>}`
    : `${Key}`;
}[keyof T & (string | number)];

export type NestedMostBottomKey<T extends object> = {
  [Key in keyof T & (string | number)]: T[Key] extends object
    ? `${Key}.${NestedKey<T[Key]>}`
    : `${Key}`;
}[keyof T & (string | number)];

export type ColorCode = NestedMostBottomKey<
  MagiToken["color"]["common"]
>;
