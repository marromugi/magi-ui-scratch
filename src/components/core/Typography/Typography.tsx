import clsx from "clsx";

import { TYPOGRAPHY_VARIABLES } from "./const";
import { TypographyElements, TypographyProps } from "./type";
import style from "./Typography.module.scss";

export const Typography = <Element extends TypographyElements>({
  theme = "disabled",
  size = "md",
  family = "base",
  proportional = true,
}: TypographyProps<Element>) => {
  return (
    <p
      className={clsx(
        TYPOGRAPHY_VARIABLES({ theme, size, family, proportional }),
        style.proportional,
      )}
    >
      eBPFは、Linuxカーネル空間で動作し、パケットフィルタリングやパフォーマンス調査のためのトレーシングなどに活用されている技術です。また、近年はクラウドやセキュリティといった文脈でも活用されています。例えば、CNCFのプロジェクトとして有名なCNI（Container
      Network
      Interface）の1種であるCiliumや、コンテナのランタイムセキュリティのツールであるFalcoなどに利用されています。
    </p>
  );
};
