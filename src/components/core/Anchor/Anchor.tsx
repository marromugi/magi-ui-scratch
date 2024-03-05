import clsx from "clsx";
import { ReactElement } from "react";

import { AnchorProps } from "./type";

export const Anchor = (props: AnchorProps): ReactElement => {
  return (
    <a {...props} className={clsx("")}>
      {props.children}
    </a>
  );
};
