import { expect, describe, test } from "vitest";

import { generateVariables } from "../generator/style";
import { generateNestKeyAndValue } from "../utils";

describe("generateNestKeyAndValue", () => {
  test("type: String", async () => {
    const result = generateNestKeyAndValue({
      font: {
        size: {
          sm: "14px",
        },
      },
    });
    expect(result["font-size-sm"]).toBe("14px");
  });
  test("type: Number", async () => {
    const result = generateNestKeyAndValue({
      font: {
        weight: {
          thin: 100,
        },
      },
    });
    expect(result["font-weight-thin"]).toBe(100);
  });
  test("type: Array", async () => {
    const result = generateNestKeyAndValue({
      font: {
        family: {
          base: ["Apple Color Emoji", "Segoe UI Emoji"],
        },
      },
    });
    expect(result["font-family-base"]).toBe(
      '"Apple Color Emoji", "Segoe UI Emoji"',
    );
  });
  test("type: Multiple Nested Object", async () => {
    const result = generateNestKeyAndValue({
      color: {
        gray: {
          100: "#F0F0F0",
          200: "#D1D1D1",
        },
      },
    });
    expect(result["color-gray-100"]).toBe("#F0F0F0");
    expect(result["color-gray-200"]).toBe("#D1D1D1");
  });
  test("prefix", async () => {
    const result = generateNestKeyAndValue(
      {
        font: {
          size: {
            sm: "14px",
          },
        },
      },
      "$--mg-",
    );
    expect(result["$--mg-font-size-sm"]).toBe("14px");
  });
  test("suffix", async () => {
    const result = generateNestKeyAndValue(
      {
        font: {
          size: {
            sm: "14px",
          },
        },
      },
      "",
      "-light",
    );
    expect(result["font-size-sm-light"]).toBe("14px");
  });
  test("affix", async () => {
    const result = generateNestKeyAndValue(
      {
        font: {
          size: {
            sm: "14px",
          },
        },
      },
      "$--mg-",
      "-light",
    );

    const base = {
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
          gray: {
            100: "#F0F0F0",
            200: "#D1D1D1",
          },
          dark: {
            100: "#303030",
            200: "#616161",
          },
        },
      },
      shadow: {
        xs: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))",
        sm: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))",
        md: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))",
        lg: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))",
      },
    };

    generateVariables(base);

    expect(result["$--mg-font-size-sm-light"]).toBe("14px");
  });
});
