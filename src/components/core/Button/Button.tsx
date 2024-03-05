import React, { ReactElement } from "react"
import { ButtonProps } from "./type"

export const Button = ({children, ...props}: ButtonProps): ReactElement => {
  return <button {...props}>{children}</button>
}