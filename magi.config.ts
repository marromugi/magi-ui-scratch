import { defineConfig } from "@/system";

export default defineConfig({
  font: {
    size: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "20px",
    },
    family: {
      base: [
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      mono: [
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
  },
  color: {
    common: {
      primary: {
        900: "#FFFFFF",
        800: "#C0C0C0",
        700: "#A0A0A0",
      },
      secondary: {
        900: "#FFFFFF",
        800: "#C0C0C0",
        700: "#FFFFFF",
      },
      white: "#FFFFFF",
      black: "#000000",
    },
    dark: {
      primary: {
        900: "#FFFFFF",
        800: "#C0C0C0",
        700: "#A0A0A0",
      },
      secondary: {
        900: "#FFFFFF",
        800: "#C0C0C0",
        700: "#A0A0A0",
      },
      white: "#FFFFFF",
    },
  },
  shadow: {
    sm: "aa",
    md: "asfa",
    lg: "gsdg",
    xl: "gg",
  },
  space: {
    sm: 14,
    md: "16",
    lg: "18",
    xl: 22,
  },
});
