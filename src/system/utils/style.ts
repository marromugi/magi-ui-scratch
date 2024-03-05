import { Token } from "magi-ui";
import { NestedMostBottomKey } from "../types";
import { CLASSNAME_PREFIX } from "../const";

export const color = (
  key: NestedMostBottomKey<Token["color"]["common"]>,
  style: "text" | "border" | "bg" | "fill" | "stroke",
) => {
  const formattedKey = key.replace(".", "-");
  return `${CLASSNAME_PREFIX}-${style}-color-${formattedKey}`;
};
