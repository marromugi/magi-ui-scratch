import { describe } from "node:test";

import { expect, test } from "vitest";

import { generateCss, generateTypes } from ".";

const DUMMY_TOKEN = {
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
    xl: 20,
  },
};

describe("generateType", () => {
  test("success to generate", async () => {
    await generateTypes(DUMMY_TOKEN);
    expect(true).toBe(true);
  });
});

describe("generateCss", () => {
  test("success to generate", async () => {
    await generateCss(DUMMY_TOKEN);
    expect(true).toBe(true);
  });
});
