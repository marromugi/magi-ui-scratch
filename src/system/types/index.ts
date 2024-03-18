export type Theme = "common" | "light" | "dark";

type WithTheme<T = unknown> = {
  common: T;
  light?: T;
  dark?: T;
};

type Color = {
  [key in string]:
    | Partial<{
        [key in number]: WithTheme<string>;
      }>
    | WithTheme<string>;
};
export type TokenBase = {
  font?: {
    // size: {
    //   xs?: string;
    //   sm?: string;
    //   md?: string;
    //   lg?: string;
    // };
    size?: Record<string | number, { [key in number]: string }>;
    // size?: Record<string, {
    //   size: string,
    //   line: string
    //   kerning: string
    //  }>;
    family?: Record<string | number, string[]>;
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
    tracking?: Record<string | number, string>;
    lineSpace?: Record<string | number, string>;
  };
  color?: Color;
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
  shadow?: Record<string | number, string>;
  space?: Record<string | number, string | number>;
  radius?: Record<string | number, string | number>;
  transition?: Record<string | number, string | number>;
  timing?: Record<string | number, string | number>;
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
