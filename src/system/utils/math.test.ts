import { expect, describe, test } from "vitest";

import { fibonacci } from "./math";

describe("fibonacci", () => {
  test("check result", async () => {
    const result1 = fibonacci(1);
    const result2 = fibonacci(2);
    const result3 = fibonacci(3);
    const result4 = fibonacci(4);
    expect(result1).toBe(1);
    expect(result2).toBe(3);
    expect(result3).toBe(6);
    expect(result4).toBe(10);
  });
});
