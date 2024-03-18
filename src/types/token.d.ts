declare module "magi-ui" {
  export type Color = {
    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    blue: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
      1100: string;
      1200: string;
    };
    green: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
      1100: string;
      1200: string;
    };
    red: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
      1100: string;
      1200: string;
    };
    lime: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
      1100: string;
      1200: string;
    };
    orange: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
      1100: string;
      1200: string;
    };
    purple: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
      1100: string;
      1200: string;
    };
    white: string;
    black: string;
  };

  export type Font = {
    size: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
    };
    family: {
      base: string;
      mono: string;
    };
    tracking: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
    };
    lineSpace: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
    };
  };

  export type Shadow = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    inner: string;
    none: string;
  };

  export type Space = {
    xs: string | number;
    sm: string | number;
    md: string | number;
    lg: string | number;
    xl: string | number;
  };

  export type Token = {
    color: Color;
    font: Font;
    shadow: Shadow;
    space: Space;
    radius: Radius;
    transition: Transition;
    timing: Timing;
  };

  export type Radius = {
    none: string | number;
    xs: string | number;
    sm: string | number;
    md: string | number;
    lg: string | number;
    xl: string | number;
    "2xl": string | number;
    "3xl": string | number;
    full: string | number;
  };

  export type Transition = {
    "100": string | number;
    "200": string | number;
  };

  export type Timing = {
    "100": string | number;
  };
}
declare module "*.css";
declare module "*.scss";
