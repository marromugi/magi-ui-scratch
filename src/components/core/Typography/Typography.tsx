import { color } from "@/system/utils";
import { TypographyProps } from "./type";
import clsx from "clsx";

export const Typography = ({}) => {
  return <p className={clsx(color("primary.700", "text"))}>Hello</p>;
};
