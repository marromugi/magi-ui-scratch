declare module "magi-ui" {
  export type Color = {
    common: {
      primary: {
        700: string;
        800: string;
        900: string;
      };
      secondary: {
        700: string;
        800: string;
        900: string;
      };
      white: string;
    };
    dark: {
      primary: {
        700: string;
        800: string;
        900: string;
      };
      secondary: {
        700: string;
        800: string;
        900: string;
      };
      white: string;
    };
  };

  export type Font = {
    size: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    family: {
      base: string;
      mono: string;
    };
  };

  export type Shadow = {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };

  export type Space = {
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
  };
}
