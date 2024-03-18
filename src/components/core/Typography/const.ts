import { cBool, mv } from "@/components/utils";
import { token } from "@/system/utils";

export const TYPOGRAPHY_VARIABLES = mv({
  theme: {
    body: [token("text", "gray.900")],
    description: [token("text", "gray.700")],
    placeholder: [token("text", "gray.600")],
    fill: [token("text", "gray.50")],
    link: [
      token("text", "blue.800"),
      token("text", "blue.900", "hover"),
      token("text", "blue.900", "active"),
      token("text", "blue.900", "visited"),
    ],
    alert: [token("text", "red.800")],
    disabled: [token("text", "gray.500")],
  },
  size: {
    xs: [
      token("font-size", "xs"),
      token("font-lineSpace", "xs"),
      token("font-tracking", "xs"),
    ],
    sm: [
      token("font-size", "sm"),
      token("font-lineSpace", "sm"),
      token("font-tracking", "sm"),
    ],
    md: [
      token("font-size", "md"),
      token("font-lineSpace", "md"),
      token("font-tracking", "md"),
    ],
    lg: [
      token("font-size", "lg"),
      token("font-lineSpace", "lg"),
      token("font-tracking", "lg"),
    ],
    xl: [
      token("font-size", "xl"),
      token("font-lineSpace", "xl"),
      token("font-tracking", "xl"),
    ],
    "2xl": [
      token("font-size", "2xl"),
      token("font-lineSpace", "2xl"),
      token("font-tracking", "2xl"),
    ],
    "3xl": [
      token("font-size", "3xl"),
      token("font-lineSpace", "3xl"),
      token("font-tracking", "3xl"),
    ],
    "4xl": [
      token("font-size", "4xl"),
      token("font-lineSpace", "4xl"),
      token("font-tracking", "4xl"),
    ],
  },
  family: {
    base: [token("font-family", "base")],
  },
  ...cBool("proportional"),
});
