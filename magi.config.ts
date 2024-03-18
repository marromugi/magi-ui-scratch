import { defineConfig } from "@/system";
import { fibonacci, moduler } from "@/system/utils/math";

export default defineConfig({
  font: {
    size: {
      xs: `${moduler(10, 8)}rem`,
      sm: `${moduler(9, 8)}rem`,
      md: `${moduler(8, 8)}rem`,
      lg: `${moduler(7, 8)}rem`,
      xl: `${moduler(6, 8)}rem`,
      "2xl": `${moduler(5, 8)}rem`,
      "3xl": `${moduler(4, 8)}rem`,
      "4xl": `${moduler(3, 8)}rem`,
      "5xl": `${moduler(2, 8)}rem`,
      "6xl": `${moduler(1, 8)}rem`,
    },
    family: {
      base: [
        "Avenir-Roman",
        "Arial",
        "游ゴシック体",
        "YuGothic",
        "游ゴシック Medium",
        "Yu Gothic Medium",
        "游ゴシック",
        "Yu Gothic",
        "sans-serif",
      ],
      mono: [
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    tracking: {
      xs: "0.01rem",
      sm: "0.02rem",
      md: "0.04rem",
      lg: "0.05rem",
      xl: "0.06rem",
      "2xl": "0.07em",
      "3xl": "0.08em",
      "4xl": "0.09em",
    },
    lineSpace: {
      xs: `${moduler(8, 8) + 0.25}rem`,
      sm: `${moduler(7, 8) + 0.25}rem`,
      md: `${moduler(6, 8) + 0.25}rem`,
      lg: `${moduler(5, 8) + 0.25}rem`,
      xl: `${moduler(4, 8) + 0.25}rem`,
      "2xl": `${moduler(3, 8) + 0.25}rem`,
      "3xl": `${moduler(2, 8) + 0.25}rem`,
      "4xl": `${moduler(1, 8) + 0.25}rem`,
    },
  },
  color: {
    gray: {
      50: {
        common: "#f2f2f2",
      },
      100: {
        common: "#e6e6e6",
      },
      200: {
        common: "#cccccc",
      },
      300: {
        common: "#b3b3b3",
      },
      400: {
        common: "#999999",
      },
      500: {
        common: "#7f7f7f",
      },
      600: {
        common: "#666666",
      },
      700: {
        common: "#4d4d4d",
      },
      800: {
        common: "#333333",
      },
      900: {
        common: "#1a1a1a",
      },
    },
    blue: {
      50: {
        common: "#E8F1FE",
      },
      100: {
        common: "#D9E6FF",
      },
      200: {
        common: "#C5D7FB",
      },
      300: {
        common: "#9DB7F9",
      },
      400: {
        common: "#7096F8",
      },
      500: {
        common: "#4979F5",
      },
      600: {
        common: "#3460FB",
      },
      700: {
        common: "#264AF4",
      },
      800: {
        common: "#0031D8",
      },
      900: {
        common: "#0017C1",
      },
      1000: {
        common: "#00118F",
      },
      1100: {
        common: "#000071",
      },
      1200: {
        common: "#000060",
      },
    },
    green: {
      50: {
        common: "#E6F5EC",
      },
      100: {
        common: "#C2E5D1",
      },
      200: {
        common: "#9BD4B5",
      },
      300: {
        common: "#71C598",
      },
      400: {
        common: "#51B883",
      },
      500: {
        common: "#2CAC6E",
      },
      600: {
        common: "#259D63",
      },
      700: {
        common: "#1D8B56",
      },
      800: {
        common: "#197A4B",
      },
      900: {
        common: "#115A36",
      },
      1000: {
        common: "#0C472A",
      },
      1100: {
        common: "#08351F",
      },
      1200: {
        common: "#032213",
      },
    },
    red: {
      50: {
        common: "#FDEEEE",
      },
      100: {
        common: "#FFDADA",
      },
      200: {
        common: "#FFBBBB",
      },
      300: {
        common: "#FF9696",
      },
      400: {
        common: "#FF7171",
      },
      500: {
        common: "#FF5454",
      },
      600: {
        common: "#FE3939",
      },
      700: {
        common: "#FA0000",
      },
      800: {
        common: "#EC0000",
      },
      900: {
        common: "#CE0000",
      },
      1000: {
        common: "#850000",
      },
      1100: {
        common: "#620000",
      },
      1200: {
        common: "#032213",
      },
    },
    lime: {
      50: {
        common: "#EBFAD9",
      },
      100: {
        common: "#D0F5A2",
      },
      200: {
        common: "#C0F354",
      },
      300: {
        common: "#ADE830",
      },
      400: {
        common: "#9DDD15",
      },
      500: {
        common: "#8CC80C",
      },
      600: {
        common: "#7EB40D",
      },
      700: {
        common: "#6FA104",
      },
      800: {
        common: "#618E00",
      },
      900: {
        common: "#507500",
      },
      1000: {
        common: "#3E5A00",
      },
      1100: {
        common: "#2C4100",
      },
      1200: {
        common: "#1E2D00",
      },
    },
    orange: {
      50: {
        common: "#FFEEE2",
      },
      100: {
        common: "#FFDFCA",
      },
      200: {
        common: "#FFC199",
      },
      300: {
        common: "#FFA66D",
      },
      400: {
        common: "#FF8D44",
      },
      500: {
        common: "#FF7628",
      },
      600: {
        common: "#FB5B01",
      },
      700: {
        common: "#E25100",
      },
      800: {
        common: "#C74700",
      },
      900: {
        common: "#AC3E00",
      },
      1000: {
        common: "#8B3200",
      },
      1100: {
        common: "#6D2700",
      },
      1200: {
        common: "#541E00",
      },
    },
    purple: {
      50: {
        common: "#F1EAFA",
      },
      100: {
        common: "#ECDDFF",
      },
      200: {
        common: "#DDC2FF",
      },
      300: {
        common: "#CDA6FF",
      },
      400: {
        common: "#BB87FF",
      },
      500: {
        common: "#A565F8",
      },
      600: {
        common: "#8843E1",
      },
      700: {
        common: "#6F23D0",
      },
      800: {
        common: "#5C10BE",
      },
      900: {
        common: "#5109AD",
      },
      1000: {
        common: "#41048E",
      },
      1100: {
        common: "#30016C",
      },
      1200: {
        common: "#21004B",
      },
    },
    white: {
      common: "#FFFFFF",
    },
    black: {
      common: "#000000",
    },
  },
  shadow: {
    xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "0 0 #0000",
  },
  space: {
    xs: `${fibonacci(1) * 0.5}rem`,
    sm: `${fibonacci(2) * 0.5}rem`,
    md: `${fibonacci(3) * 0.5}rem`,
    lg: `${fibonacci(4) * 0.5}rem`,
    xl: `${fibonacci(5) * 0.5}rem`,
  },
  radius: {
    none: "0px",
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  transition: {
    100: 0.2,
    200: "0.3s",
  },
  timing: {
    100: "ease-in",
  },
});
